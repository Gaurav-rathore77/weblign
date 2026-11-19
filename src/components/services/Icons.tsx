import {
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlineShoppingCart,
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineChartBarSquare,
  HiOutlineCommandLine,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineArrowTrendingUp,
  HiOutlineUserGroup,
} from 'react-icons/hi2';

export const serviceIcons = {
  web: HiOutlineGlobeAlt,
  mobile: HiOutlineDevicePhoneMobile,
  design: HiOutlinePaintBrush,
  ecommerce: HiOutlineShoppingCart,
  cloud: HiOutlineCloud,
  ai: HiOutlineCpuChip,
  dashboard: HiOutlineChartBarSquare,
  software: HiOutlineCommandLine,
} as const;

export const benefitIcons = {
  fast: HiOutlineBolt,
  secure: HiOutlineShieldCheck,
  growth: HiOutlineArrowTrendingUp,
  partnership: HiOutlineUserGroup,
} as const;

export type ServiceIconKey = keyof typeof serviceIcons;
export type BenefitIconKey = keyof typeof benefitIcons;
