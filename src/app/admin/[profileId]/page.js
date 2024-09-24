import connectDB from "@/utils/auth/connectDB";
import Profile from "@/models/Profile";
import DetailsPage from "@/templates/DetailsPage";
import BackButton from "@/modules/BackButton";

async function AdminDetails(props) {
  // console.log(props)
  const id = props.params.profileId;

  await connectDB();

  const profiles = await Profile.findOne({ _id: id });
  console.log(profiles);

  return <DetailsPage data={profiles} admin={true} />;
}

export default AdminDetails;
