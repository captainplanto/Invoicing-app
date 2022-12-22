import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import { Image } from "@nextui-org/react";
import { IButton } from "../../type/type";

export const ButtonComponent: FC<IButton> = (props) => {
  const { children, icon, link, onClick, showIcon, style, className } = props;
  if (link) {
    return (
      <Link href={link && link}>
        <div className="icon_child">
          <CustomButton
            onClick={onClick}
            $showIcon={showIcon}
            style={style && style}
            className={className}
          >
            {icon ? (
              <>
                <div className="icon_bg">
                  <Image
                    src={icon}
                    width={20}
                    height={20}
                    objectFit="contain"
                    alt="icon-button"
                  />
                </div>
                <p>{children}</p>
              </>
            ) : (
              <p>{children}</p>
            )}
          </CustomButton>
        </div>
      </Link>
    );
  }
  return (
    <CustomButton
      onClick={onClick}
      $showIcon={showIcon && showIcon}
      style={style && style}
      className={className}
    >
      <div className="icon_child">
        {icon ? (
          <>
            <div className="icon_bg">
              <Image
                src={icon}
                objectFit="contain"
                width={20}
                height={20}
                alt="icon-button"
              />
            </div>
            <p>{children}</p>
          </>
        ) : (
          <p>{children}</p>
        )}
      </div>
    </CustomButton>
  );
};
const CustomButton = styled.button<{ $showIcon: boolean }>`
  border: none;
  background: var(--main-blue);
  transition: background 2s ease-in;
  :hover {
    background: var(--light-blue);
  }
  border-radius: 3rem;
  padding: ${(props) =>
    props.$showIcon ? "0.5rem 3rem 0.5rem 0.5rem" : ".9rem 1.3rem"};
  cursor: pointer;
  p {
    font-size: 1.3rem;
    font-weight: 500;
    color: white;
    font-family: var(--main-font);
    text-align: center !important;
    white-space: nowrap;
  }

  .icon_child {
    display: ${(props) => (props.$showIcon ? "flex" : "")};
    align-items: center;
    gap: 1rem;
    .icon_bg {
      background-color: var(--main-white);
      padding: 1.5rem;
      border-radius: 4rem;
      @media screen and (max-width: 500px) {
        padding: 0.9rem;
      }
    }
  }
`;
