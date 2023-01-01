import DisplayText from "./../components/DisplayText";
import type { NextPage } from "next";
import { FormData } from "./_app";
import Layout from "../components/Layout";
import Container from "./../components/Container";
import Form from "./../components/Form";

export type HomeProps = {
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const Home: NextPage<HomeProps> = ({ formData, setFormData }) => {
	return (
		<Layout>
			<Container>
				<DisplayText
					heading="Effortlessly create your own brand kit in seconds"
					text="Use our AI-powered tool to start building a unique visual identity for
				your project"
				/>
				<Form
					placeholder="Enter your brand name"
					buttonText="Get Started"
					formData={formData}
					setFormData={setFormData}
					formDataKey="name"
				/>
			</Container>
		</Layout>
	);
};

export default Home;
