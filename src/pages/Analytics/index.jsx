import OverviewCards from "~/components/analytics/OverviewCards";
import RevenueChart from "~/components/analytics/RevenueChart";
import ChannelPerformance from "~/components/analytics/ChannelPerformance";
import ProductPerformance from "~/components/analytics/ProductPerformance";
import UserRetention from "~/components/analytics/UserRetention";
import CustomerSegmentation from "~/components/analytics/CustomerSegmentation";
import AIPoweredInsights from "~/components/analytics/AIPoweredInsights";

const Analytics = () => {
	return (
		<>
			<OverviewCards />
				<RevenueChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
				</div>

				<AIPoweredInsights />
		</>
	);
};
export default Analytics;
