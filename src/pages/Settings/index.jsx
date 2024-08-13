import ConnectedAccounts from "~/components/settings/ConnectedAccounts";
import DangerZone from "~/components/settings/DangerZone";
import Notifications from "~/components/settings/Notifications";
import Profile from "~/components/settings/Profile";
import Security from "~/components/settings/Security";

const SettingsPage = () => {
	return (
		<>
			<Profile />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
		</>
	);
};
export default SettingsPage;
