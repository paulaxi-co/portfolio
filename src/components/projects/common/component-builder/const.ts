import { ProjectButton } from "../button";
import { ProjectImage } from "../image";
import { ProjectImageWithDescription } from "../image-with-description";
import { ProjectPresentationCard } from "../presentation-card";
import { ProjectScreenshotShowcase } from "../screenshot-showcase";
import { ProjectScreenshots } from "../screnshots";
import { ProjectTextContent } from "../text-content";
import { ProjectTitle } from "../title";
import { TwoColText } from "../two-col-text";
import { ProjectTwoPicture } from "../two-picture";

export const COMPONENT_MAP = {
  'projectImage': ProjectImage,
  'twoColText': TwoColText,
  'screenshots': ProjectScreenshots,
  title: ProjectTitle,
  textContent: ProjectTextContent,
  button: ProjectButton,
  imageWithDescription: ProjectImageWithDescription,
  twoPicture: ProjectTwoPicture,
  presentationCard: ProjectPresentationCard,
  screenshotShowcase: ProjectScreenshotShowcase
} as const;
