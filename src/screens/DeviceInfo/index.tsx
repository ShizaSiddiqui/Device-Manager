import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "react-native-qrcode-svg";
import { v4 as UUID } from "uuid";
import * as Yup from "yup";
import { Formik } from "formik";
import { useTheme } from "styled-components/native";
import {
	deleteDevice,
	registerDevice,
	updateDevice,
} from "../../redux-saga/modules/devices/action";

import Header from "../../components/Header";
import Input from "../../components/Input";
import KeyboardWrapper from "../../components/KeyboardAvoidingWrapper";
import FilledButton from "../../components/FilledButton";
import FilledButton from "../../components/BorderButton";
import LoadingOverlayer from "../../components/ActivityLoading";
import { RootState } from "../../utils/interface/RootInterface";
import { Device } from "../../utils/interface/deviceInfoInterface";

type DeviceInfoProps = {
	DeviceInfo: {
		edit: boolean;
		device?: Device;
	};
};

interface FormDeviceInfo {
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

	const handleEdit = (formData: FormDeviceInfo) => {
		const device: Device = {
			id: deviceId,
			...formData,
		};
		dispatcher(updateDevice(device));
	};

	const handleDelete = (id: string) => {
		dispatcher(deleteDevice(id));
	};

	const handleCreate = (formData: FormDeviceInfo) => {
		const device: Device = {
			id: UUID(),
			...formData,
		};
		dispatcher(registerDevice(device));
	};

	return (
		<>
			<Header goBack title={model || "Device Info"} />
			<KeyboardWrapper>
				<Styles.Container showsVerticalScrollIndicator={false}>
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
									<Styles.QrCodeContainer>
										<QRCode
											backgroundColor="transparent"
											color={Colors.link}
											value={`Model ${values.model}\n OS ${values.os}\n Notes ${values.notes}`}
										/>
									</Styles.QrCodeContainer>
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
									placeholder="iPhone 13 Pro Max"
								/>
								<Input
									onChangeText={handleChange("os")}
									focusCb={() => setFieldError("os", undefined)}
									value={values.os}
									error={errors.os}
									label="OS:"
									iconName="cpu"
									placeholder="iOS, Android..."
								/>
								<Input
									onChangeText={handleChange("currentOwner")}
									focusCb={() => setFieldError("currentOwner", undefined)}
									value={values.currentOwner}
									error={errors.currentOwner}
									label="Current Owner:"
									iconName="user"
									placeholder="Shiza"
								/>
								<Input
									onChangeText={handleChange("notes")}
									focusCb={() => setFieldError("notes", undefined)}
									value={values.notes}
									error={errors.notes}
									label="Notes:"
									iconName="clipboard"
									placeholder="Testing for s4 digital app"
								/>
								<FilledButton text="Submit" onPress={() => handleSubmit()} />
								{routes.params.edit && (
									<FilledButton
										text="Delete"
										onPress={() => handleDelete(deviceId)}
									/>
								)}
							</React.Fragment>
						)}
					</Formik>
				</Styles.Container>
			</KeyboardWrapper>
			<LoadingOverlayer loading={loading} />
		</>
	);
};

export default DeviceInfo;
