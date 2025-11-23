"use client"
import { Header } from "./header";
import { DesignPurpose } from "./design-purpose";
import { FeaturedProjects } from "./featured-projects";
import { Fragment } from "react";

export function HomePage() {
  return (
    <Fragment>
      <Header />
      <DesignPurpose />
      <FeaturedProjects id="projects" className="mt-[24px]" />
    </Fragment>
  );
}
