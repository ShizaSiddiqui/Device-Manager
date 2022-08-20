import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "react-native-qrcode-svg";
import { v4 as uuidV4 } from "uuid";
import * as Yup from "yup";
import { Formik } from "formik";
import { useTheme } from "styled-components/native";
import {
	deleteDevice,
	registerDevice,
	updateDevice,
} from "../../store/modules/devices/action";

// Components && Utils
import * as S from "./styles";
import Input from "../../components/Input";
import Header from "../../components/Header";
import KeyboardWrapper from "../../components/KeyboardWrapper";
import SubmitButton from "../../components/SubmitButton";
import OutlineButton from "../../components/OutlineButton";
import LoadingOverlayer from "../../components/LoadingOverlayer";
import { RootState } from "../../utils/models/RootState";
import { Device } from "../../utils/models/device";

type DeviceInfoProps = {
	DeviceInfo: {
		edit: boolean;
		device?: Device;
	};
};

interface IForm {
	model: string;
	os: string;
	currentOwner: string;
	notes: string;
}

const DeviceInfo: React.FC = () => {
	const routes = useRoute<RouteProp<DeviceInfoProps, "DeviceInfo">>();
	const loading = useSelector((state: RootState) => state.devices.loading);
	const dispatcher = useDispatch();
	const { Colors } = useTheme();

	const [deviceId, setDeviceId] = useState("");
	const [model, setModel] = useState("");
	const [os, setOs] = useState("");
	const [owner, setOwner] = useState("");
	const [notes, setNotes] = useState("");

	const schema = Yup.object().shape({
		model: Yup.string().required(),
		os: Yup.string().required(),
		owner: Yup.string(),
		notes: Yup.string().required(),
	});

	useEffect(() => {
		function fillFieldsIfEdit() {
			if (routes.params.edit && routes.params.device) {
				const deviceInfo = routes.params.device;
				setDeviceId(deviceInfo.id);
				setModel(deviceInfo.model);
				setOs(deviceInfo.os);
				if (deviceInfo.currentOwner) {
					setOwner(deviceInfo.currentOwner);
				}
				setNotes(deviceInfo.notes);
			}
		}
		fillFieldsIfEdit();
	}, []);

	const handleEdit = (formData: IForm) => {
		const device: Device = {
			id: deviceId,
			...formData,
		};
		dispatcher(updateDevice(device));
	};

	const handleDelete = (id: string) => {
		dispatcher(deleteDevice(id));
	};

	const handleCreate = (formData: IForm) => {
		const device: Device = {
			id: uuidV4(),
			...formData,
		};
		dispatcher(registerDevice(device));
	};

	return (
		<>
			<Header goBack title={model || "Manage"} />
			<KeyboardWrapper>
				<S.Container showsVerticalScrollIndicator={false}>
					<Formik
						validateOnBlur={false}
						validateOnChange={false}
						enableReinitialize
						validationSchema={schema}
						initialValues={{
							model: model || "",
							os: os || "",
							currentOwner: owner || "",
							notes: notes || "",
						}}
						onSubmit={values =>
							routes.params.edit ? handleEdit(values) : handleCreate(values)
						}
					>
						{({
							handleSubmit,
							handleChange,
							values,
							errors,
							setFieldError,
						}) => (
							<React.Fragment>
								{values.model && values.os && values.notes ? (
									<S.QrCodeContainer>
										<QRCode
											backgroundColor="transparent"
											color={Colors.link}
											value={`Model ${values.model}\n OS ${values.os}\n Notes ${values.notes}`}
										/>
									</S.QrCodeContainer>
								) : (
									<></>
								)}

								<Input
									onChangeText={handleChange("model")}
									focusCb={() => setFieldError("model", undefined)}
									value={values.model}
									error={errors.model}
									label="Model:"
									iconName="smartphone"
									placeholder="Iphone 13"
								/>
								<Input
									onChangeText={handleChange("os")}
									focusCb={() => setFieldError("os", undefined)}
									value={values.os}
									error={errors.os}
									label="OS:"
									iconName="server"
									placeholder="Android, IOS, ..."
								/>
								<Input
									onChangeText={handleChange("currentOwner")}
									focusCb={() => setFieldError("currentOwner", undefined)}
									value={values.currentOwner}
									error={errors.currentOwner}
									label="Current owner: (optional)"
									iconName="user"
									placeholder="Current Owner"
								/>
								<Input
									onChangeText={handleChange("notes")}
									focusCb={() => setFieldError("notes", undefined)}
									value={values.notes}
									error={errors.notes}
									label="Notes:"
									iconName="paperclip"
									placeholder="Notes"
								/>
								<SubmitButton text="Submit" onPress={() => handleSubmit()} />
								{routes.params.edit && (
									<OutlineButton
										text="Delete"
										onPress={() => handleDelete(deviceId)}
									/>
								)}
							</React.Fragment>
						)}
					</Formik>
				</S.Container>
			</KeyboardWrapper>
			<LoadingOverlayer visible={loading} />
		</>
	);
};

export default DeviceInfo;
