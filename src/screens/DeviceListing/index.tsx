import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { v4 as UUID } from "uuid";
import React, { useState } from "react";
import { FlatList ,Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { jsonToCSV } from "react-native-csv";
import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
import * as Sharing from "expo-sharing";
import { registerMultiple } from "../../redux-saga/modules/devices/action";
import { useTheme } from "styled-components/native";

// Components && utils
import * as Styles from "./styles";
import parserApi from "../../network/csvToJsonApi";
import DeviceCard from "../../components/DeviceInfoCard";
import Header from "../../components/Header";
import AddButton from "../../components/AddButton";
import OutlineButton from "../../components/BorderButton";
import { RootState } from "../../utils/interface/RootInterface";
import { Device } from "../../utils/interface/deviceInfoInterface";
import LoadingOverlayer from "../../components/ActivityLoading";

declare global {
	interface FormDataValue {
		uri: string;
		name: string;
		type: string;
	}

	interface FormData {
		append(name: string, value: FormDataValue, fileName?: string): void;
	}
}

interface ResponseProps {
	devices: Device[];
}

const DeviceListing: React.FC = () => {
  const {Colors} = useTheme();
	const devices = useSelector((state: RootState) => state.devices.devices);
	const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
	const dispatch = useDispatch();
	const [importLoading, setImportLoading] = useState(false);

	const parseCsv = async (formDataFile: FormData) => {
		const { data } = await parserApi.post("/uploadCsv", formDataFile, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		const response: ResponseProps = data;
		if (response) {
			return response;
		}
	};

	const handleExport = async () => {
		const data = JSON.stringify(devices);
		const parsed = jsonToCSV(data);
		const fileUri = `${FileSystem.documentDirectory}devices${UUID()}.csv`;
		await FileSystem.writeAsStringAsync(fileUri, parsed, {
			encoding: FileSystem.EncodingType.UTF8,
		}).then(() => {
			Sharing.shareAsync(fileUri);
		});
	};

	const handleImport = async () => {
		// setImportLoading(true);
		DocumentPicker.getDocumentAsync({
			multiple: false,
			type: ["text/csv", "text/comma-separated-values"],
		}).then(async (result: any) => {
			const formData = new FormData();
			formData.append("file", {
				uri: result.uri,
				type: result.mimeType,
				name: result.name,
			});
			try {
				const parsed = await parseCsv(formData);
				if (parsed?.devices) {
					dispatch(registerMultiple(parsed.devices));
					// setImportLoading(false);
				}
			} catch (err) {
				console.log!(err);
			}
		});
	};

	return (
		<>
		<Header title="Test Device" darkMode />
			<Styles.Container>
				<Styles.ActionsContainer>
					<Styles.BtnContainer>
						<OutlineButton
							disabled={devices.length < 1}
							onPress={() => handleExport()}
							text="Export"
						/>
					</Styles.BtnContainer>
					<Styles.BtnContainer>
						<OutlineButton onPress={() => handleImport()} text="Import" />
					</Styles.BtnContainer>
				</Styles.ActionsContainer>
			{devices.length> 0 ?	
      (<FlatList
					data={devices}
					renderItem={({ item }) => <DeviceCard device={item} />}
					keyExtractor={({ id }) => id}
					showsVerticalScrollIndicator={false}
				/>) :
       ( <Styles.NoItemFound>
        <Text style={{textAlign:'center', textAlignVertical:'center', color:Colors.secondaryText }}>Press + to add new device</Text>
        </Styles.NoItemFound>)
        }
				<AddButton
					onPress={() => navigation.navigate("DeviceInfo", { edit: false })}
				/>
			</Styles.Container>
			{/* <LoadingOverlayer loading={importLoading} /> */}
		</>
	);
};

export default DeviceListing;
