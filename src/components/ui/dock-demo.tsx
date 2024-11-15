import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {

  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <a
            href="https://www.douyin.com/user/MS4wLjABAAAA2g0gT-mgm49hWPfdnuWFxxr8sQUxcjxUdPRlzFK5ZL2lOeRpcmAjb8AttudxQkZQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/public/douyin-logo.png"
              alt="Douyin"
              className="size-10 rounded-full"
            />
          </a>
        </DockIcon>
        <DockIcon>
          <a
            href="https://www.xiaohongshu.com/user/profile/670b67e9000000001d031780?xhsshare=CopyLink&appuid=5e9862750000000001001db8&apptime=1731579120&share_id=add1fc8635e7419bb1bed30f529e7c06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/public/redbook-logo.png"
              alt="Redbook"
              className="size-10 rounded-full"
            />
          </a>
        </DockIcon>
        <DockIcon>
          <a
            href="https://b23.tv/qIAu9Qn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/public/bl-logo.png"
              alt="bilibili"
              className="size-10 rounded-full"
            />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}