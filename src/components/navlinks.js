import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "./link";
import { Location } from "@reach/router";
import { Sun, Moon } from "./icons";

function ListItem(props) {
    const data = props.data;
    let anchorAttrs = {
        href: data.url,
        title: data.name
    };
    return (
        <Location>
            {({ location }) => {
                return (
                    <li>
                        <Link
                            to={data.url}
                            {...anchorAttrs}
                            className={
                                "/" + location.pathname.split("/")[1] ===
                                data.url
                                    ? "active"
                                    : ""
                            }
                        >
                            <span>{data.name}</span>
                        </Link>
                    </li>
                );
            }}
        </Location>
    );
}