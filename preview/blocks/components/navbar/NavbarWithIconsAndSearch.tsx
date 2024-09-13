import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

const NAV_ITEMS: MenuItem[] = [
  { label: "Home", icon: "pi pi-fw pi-home" },
  { label: "About", icon: "pi pi-fw pi-info" },
  { label: "Services", icon: "pi pi-fw pi-cog" },
  { label: "Products", icon: "pi pi-fw pi-shopping-cart" },
  { label: "Contact", icon: "pi pi-fw pi-envelope" },
];

export default function NavbarWithIconsAndSearch() {
  return (
    <Menubar
      start={<i className="pi pi-prime text-slate-800 text-2xl" />}
      model={NAV_ITEMS}
      end={<InputText placeholder="Search" className="hidden sm:block" />}
    />
  );
}
