interface Props {
  rating: number;
  onChange?: (rating: number) => void;
  count?: number;
  icon?: icons;
  size?: number;
  iconFillSelected?: string;
  iconFillUnselected?: string;
  iconStroke?: string;
}

interface IconProps extends React.SVGAttributes<unknown> {
  icon: icons;
  size?: number;
  fillSelected?: string;
  fillUnselected?: string;
  stroke?: string;
  isSelected?: boolean;
  justClicked: boolean;
}

type icons = "star" | "heart";

export type { Props, icons, IconProps };
