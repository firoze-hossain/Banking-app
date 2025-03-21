// import HeaderBox from "@/components/HeaderBox";
// import RightSidebar from "@/components/RightSidebar";
// import TotalBalanceBox from "@/components/TotalBalanceBox";
// import { getLoggedInUser } from "@/lib/actions/user.actions";
// import React from "react";

// const Home = async () => {
//   // const loggedIn = {
//   //   firstName: "Firoze",
//   //   lastName: " Hossain",
//   //   email: "firoze.hosssain@outlook.com",
//   // };
//   const loggedIn = await getLoggedInUser();
//   console.log("Fetched loggedIn user in Home:", loggedIn);
//   return (
//     <section className="home">
//       <div className="home-content">
//         <header className="home-header">
//           <HeaderBox
//             type="greeting"
//             title="welcome"
//             user={loggedIn?.name || "Guest"}
//             subtext="Access and manage your account and transaction effeciently"
//           />
//           <TotalBalanceBox
//             accounts={[]}
//             totalBanks={1}
//             totalCurrentBalance={1500}
//           />
//         </header>
//       </div>
//       <RightSidebar
//         user={loggedIn}
//         transactions={[]}
//         banks={[{ currentBalance: 123.54 }, { currentBalance: 500.23 }]}
//       />
//     </section>
//   );
// };

// export default Home;
import { redirect } from "next/navigation";
import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  console.log("Fetched loggedIn user in Home:", loggedIn);

  // Redirect to sign-in if user is not logged in
  if (!loggedIn) {
    redirect("/sign-in");
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1500}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.54 }, { currentBalance: 500.23 }]}
      />
    </section>
  );
};

export default Home;
