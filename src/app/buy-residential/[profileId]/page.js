import DetailsPage from "@/templates/DetailsPage";

import Profile from "@/models/Profile";
import connectDB from "@/utils/auth/connectDB";

async function ProfileDetails(props) {
  //   console.log(props);
  const id = props.params.profileId;

  await connectDB();

  const profile = await Profile.findOne({ _id: id });
  // console.log(profile);

  if (!profile) {
    return <h3>مشکلی پیش آمده است</h3>;
  }

  return <DetailsPage data={profile} />;
}

export default ProfileDetails;

export const generateMetadata = async (props) => {
  const id = props.params.profileId;

  await connectDB();

  const profile = await Profile.findOne({ _id: id });

  return {
    title: profile.title,
    description: profile.description,
  };
};
