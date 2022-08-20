import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { v4 as UUID } from "uuid";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { jsonToCSV } from "react-native-csv";
import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
import * as Sharing from "expo-sharing";
import { registerMultiple } from "../../store/modules/devices/action";

// Components && utils
import * as S from "./styles";
import parserApi from "../../service/parserApi";
import DeviceCard from "../../components/DeviceCard";
import Header from "../../components/Header";
import FabButton from "../../components/FabButton";
import OutlineButton from "../../components/OutlineButton";
import { RootState } from "../../utils/models/RootState";
import { Device } from "../../utils/models/device";
import LoadingOverlayer from "../../components/LoadingOverlayer";

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

const Home: React.FC = () => {
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
		setImportLoading(true);
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
					setImportLoading(false);
				}
			} catch (err) {
				console.tron.log!(err);
			}
		});
	};

	return (
		<>
			<Header title="Home" settings />
			<S.Container>
				<S.ActionsContainer>
					<S.BtnContainer>
						<OutlineButton
							disabled={devices.length < 1}
							onPress={() => handleExport()}
							text="Export"
						/>
					</S.BtnContainer>
					<S.BtnContainer>
						<OutlineButton onPress={() => handleImport()} text="Import" />
					</S.BtnContainer>
				</S.ActionsContainer>
				<FlatList
					data={devices}
					renderItem={({ item }) => <DeviceCard device={item} />}
					keyExtractor={({ id }) => id}
					showsVerticalScrollIndicator={false}
				/>
				<FabButton
					onPress={() => navigation.navigate("DeviceInfo", { edit: false })}
				/>
			</S.Container>
			<LoadingOverlayer visible={importLoading} />
		</>
	);
};

export default Home;
