import React from "react";
import UrlShortenForm from "../../components/UrlShortenForm";
import BRAND_NAME from "../../util/brand/index";
import TextLink from "../../components/TextLink";
import LinkList from "../../components/LinkList";

const HomePageContent = () => {
  return (
    <div className="p-4 text-white bg-green-800">
      <UrlShortenForm />
      <div className="py-6 px-12 text-sm text-green-100">
        By clicking shorten, you agree to {BRAND_NAME}'s outrageous{" "}
        <TextLink href="#">Terms of Use</TextLink> and highly invasive{" "}
        <TextLink href="#">Privacy Policy</TextLink>.
      </div>
      <LinkList />
    </div>
  );
};

export default HomePageContent;
