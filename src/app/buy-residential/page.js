import connectDB from "@/utils/auth/connectDB";
import Profile from "@/models/Profile";

import BuyResidentialPage from "@/templates/BuyResidentialPage";

async function BuyResidential(props) {
  //   console.log(props);
  const category = props.searchParams.category;

  await connectDB();

  const profiles = await Profile.find({ published: true }).select("-userId");

  let finalProfiles = profiles;

  if (category) {
    finalProfiles = finalProfiles.filter((item) => item.category === category);
  }

  return <BuyResidentialPage data={finalProfiles} />;
}

export default BuyResidential;


