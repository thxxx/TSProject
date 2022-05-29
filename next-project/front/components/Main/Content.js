import React from "react";
import Link from "next/link";

const Content = ({ content }) => {
  return (
    <div>
      <div>
        {content.split(/(#[^/s#]+)/g).map((item, index) => {
          if (item[0] == "#") {
            return (
              <Link href="/Profile">
                <a>{item}</a>
              </Link>
            );
          } else {
            return <>{item}</>;
          }
        })}
      </div>
    </div>
  );
};

export default Content;
