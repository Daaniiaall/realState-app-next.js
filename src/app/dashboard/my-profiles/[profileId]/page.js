import Profile from "@/models/Profile";
import AddProfilePage from "@/templates/AddProfilePage";
import connectDB from "@/utils/auth/connectDB";

async function EditProfile(props) {
  //   console.log(props.params.profileId);

  await connectDB();

  const profile = await Profile.findOne({ _id: props.params.profileId });
  // console.log(profile)
  
  return (
    <div>
      <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />
    </div>
  );
}

export default EditProfile;
