import reactotron, { ReactotronReactNative } from "reactotron-react-native";
import { Reactotron } from "reactotron-core-client";
import { reactotronRedux } from "reactotron-redux";
import { NativeModules } from "react-native";

const { scriptURL } = NativeModules.SourceCode;
const scriptHostname = scriptURL.split("://")[1].split(":")[0];

declare global {
	interface Console {
		tron: Reactotron<ReactotronReactNative> & ReactotronReactNative;
	}
}

reactotron
	.configure({ host: scriptHostname })
	.useReactNative()
	.use(reactotronRedux());

console.tron = reactotron;
export default reactotron;
