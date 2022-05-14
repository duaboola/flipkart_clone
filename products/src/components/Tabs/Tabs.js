import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const Nav_Tab = () => {
const [value, setValue] = React.useState(2);

return (
	<div
	style={{
		marginLeft: "0%",
    position: "relative",
    top:"-40px",
	}}
	>
		<Tabs
		value={value}
		textColor="Black"
		indicatorColor="primary"
		onChange={(event, newValue) => {
			setValue(newValue);
		}}
		>
		<Tab label="Sort By" disabled />
		<Tab label="Popularity" />
		<Tab label="Price -- Low to High"/>
		<Tab label="Price -- High to Low" />
    <Tab label="Newest First" />
		</Tabs>
	</div>
);
};

export default Nav_Tab;
