import React from "react";
import { BiHide, BiRestaurant, BiShow } from "react-icons/bi";
import {
  BsFastForwardCircleFill,
  BsFillCheckCircleFill,
  BsPrinterFill,
} from "react-icons/bs";
import {
  FaConciergeBell,
  FaRegObjectGroup,
  FaSave,
  FaShoppingCart,
  FaTruckLoading,
  FaUser,
} from "react-icons/fa";
import {
  FaBowlFood,
  FaCartShopping,
  FaClipboardCheck,
  FaKitchenSet,
  FaListUl,
  FaStore,
  FaTags,
  FaTruckField,
} from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";
import { FiEdit, FiPrinter, FiSearch } from "react-icons/fi";
import { GiCampCookingPot, GiCookingPot } from "react-icons/gi";
import { GrPowerReset } from "react-icons/gr";
import { HiMenu, HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import {
  IoCaretDownOutline,
  IoCart,
  IoCheckmarkDoneCircle,
  IoClose,
  IoFastFoodSharp,
  IoLogOut,
  IoPersonAddSharp,
  IoPrint,
  IoReload,
  IoReloadCircleSharp,
  IoRestaurantOutline,
} from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import {
  MdAdd,
  MdBookOnline,
  MdCancelPresentation,
  MdDashboard,
  MdDeleteOutline,
  MdEventAvailable,
  MdFullscreen,
  MdFullscreenExit,
  MdOutlineEdit,
  MdOutlinePayments,
  MdOutlinePendingActions,
  MdPending,
  MdPendingActions,
  MdSoupKitchen,
  MdSummarize,
  MdTableRestaurant,
} from "react-icons/md";
import { PiCookingPot, PiCookingPotFill, PiPackageFill } from "react-icons/pi";
import {
  RiAccountPinCircleFill,
  RiDeleteBinLine,
  RiDraftFill,
  RiEBike2Fill,
  RiSubtractFill,
} from "react-icons/ri";
import { RxLapTimer } from "react-icons/rx";
import { SiAirtable } from "react-icons/si";
import { TbDeviceIpadMinus, TbDiscount, TbMotorbike } from "react-icons/tb";
import { TfiPackage } from "react-icons/tfi";
import { TiCancel, TiDelete, TiUserAdd } from "react-icons/ti";

import { cn } from "@/lib/utils";

const icons = {
  BiRestaurant,
  IoRestaurantOutline,
  FiPrinter,
  FaKitchenSet,
  FaStore,
  TbDeviceIpadMinus,
  FaCartShopping,
  RiAccountPinCircleFill,
  MdSoupKitchen,
  MdEventAvailable,
  IoFastFoodSharp,
  FaTags,
  IoLogOut,
  MdDashboard,
  SiAirtable,
  BsPrinterFill,
  GiCookingPot,
  HiMenu,
  HiMenuAlt1,
  HiMenuAlt2,
  MdFullscreen,
  MdFullscreenExit,
  IoClose,
  MdTableRestaurant,
  FiSearch,
  GrPowerReset,
  TiUserAdd,
  FaListUl,
  IoPersonAddSharp,
  IoMdAdd,
  TiDelete,
  RiSubtractFill,
  TbDiscount,
  PiPackageFill,
  TbMotorbike,
  MdPendingActions,
  FaBowlFood,
  PiCookingPot,
  PiCookingPotFill,
  MdOutlinePayments,
  IoPrint,
  IoCart,
  FaUser,
  FaShoppingCart,
  MdAdd,
  IoIosArrowBack,
  FiEdit,
  MdDeleteOutline,
  MdOutlineEdit,
  BiShow,
  BiHide,
  FaSave,
  GiCampCookingPot,
  RiDraftFill,
  MdSummarize,
  IoCaretDownOutline,
  RiDeleteBinLine,
  MdPending,
  IoCheckmarkDoneCircle,
  IoReload,
  IoReloadCircleSharp,
  FaRegObjectGroup,
  MdOutlinePendingActions,
  FcCancel,
  MdCancelPresentation,
  TiCancel,
  RxLapTimer,
  FaClipboardCheck,
  FaTruckField,
  FaTruckLoading,
  BsFillCheckCircleFill,
  LuClipboardList,
  BsFastForwardCircleFill,
  TfiPackage,
  RiEBike2Fill,
  MdBookOnline,
  FaConciergeBell,
};

export type IconKey = keyof typeof icons;

export interface IconProps extends React.SVGAttributes<SVGAElement> {
  name: IconKey;
}

const Icon = ({ name, ...props }: IconProps) => {
  const IconComp = icons[name];
  return <IconComp {...props} className={cn(props.className || "")} />;
};

Icon.displayName = "Icon";

export default Icon;
