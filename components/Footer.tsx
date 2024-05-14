import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const handlelogout = async () => {
    await logoutAccount()
      .then(() => {
        router.push("/sign-in");
      })
      .catch((e) => {
        console.error("logout_error", e);
      });
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name_mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email_mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handlelogout}>
        <Image src="/icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};

export default Footer;
