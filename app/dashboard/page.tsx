"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { CCard, CCardImage, CCardBody } from "@coreui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import FAQPage from "@/components/Faq/Faqs";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useLayoutEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/");
    }
  }, [session, status, router]);

  useEffect(() => {
    // Simulate clicking the cart button on component mount
    const cartButton = document.getElementById("myCartDropdownButton1");
    if (cartButton) {
      cartButton.click();
    }
  }, []);

  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setDropdownVisible((prev) => !prev);
  };

  if (status === "loading") {
    return;
  }

  return (
    <div>
      {/* Cards Section */}
      <div className="container mx-auto px-4 py-8 text-black">
        {/* Cards Row */}
        <div className="flex flex-wrap justify-between">
          <CCard style={{ width: "18rem", marginBottom: "20px" }}>
            <CCardImage
              orientation="top"
              src="https://img.freepik.com/premium-vector/online-reservation-booking-icon-black-vector-graphics_1178600-116.jpg"
            />
            <CCardBody>
              <div style={{ marginTop: "10px" }} className="border-2">
                {" "}
                {/* Adjust the margin as needed */}
                <Link
                  href="services/instantbook"
                  style={{
                    textAlign: "center",
                    display: "block",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Instant Book
                </Link>
              </div>
            </CCardBody>
          </CCard>
          <CCard style={{ width: "18rem", marginBottom: "20px" }}>
            <CCardImage
              orientation="top"
              src="https://cdn.pixabay.com/photo/2018/05/08/21/29/windows-3384024_1280.png"
            />
            <CCardBody>
              <div style={{ marginTop: "10px" }} className="border-2">
                {" "}
                {/* Adjust the margin as needed */}
                <Link
                  href="services/windows"
                  style={{
                    textAlign: "center",
                    display: "block",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Windows services
                </Link>
              </div>
            </CCardBody>
          </CCard>
          <CCard style={{ width: "18rem", marginBottom: "20px" }}>
            <CCardImage
              orientation="top"
              src="https://cdn.pixabay.com/photo/2018/05/08/21/28/apple-3384010_1280.png"
            />
            <CCardBody>
              <div style={{ marginTop: "10px" }} className="border-2">
                {" "}
                {/* Adjust the margin as needed */}
                <Link
                  href="services/apple"
                  style={{
                    textAlign: "center",
                    display: "block",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Apple services
                </Link>
              </div>
            </CCardBody>
          </CCard>
          <CCard style={{ width: "18rem", marginBottom: "20px" }}>
            <CCardImage
              orientation="top"
              src="https://cdn.pixabay.com/photo/2021/08/23/22/40/refresh-6568981_1280.png"
            />
            <CCardBody>
              <div style={{ marginTop: "10px" }} className="border-2">
                {" "}
                {/* Adjust the margin as needed */}
                <Link
                  href="services/others"
                  style={{
                    textAlign: "center",
                    display: "block",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Other services
                </Link>
              </div>
            </CCardBody>
          </CCard>
        </div>

        <FAQPage />
      </div>
    </div>
  );
};

export default Dashboard;
