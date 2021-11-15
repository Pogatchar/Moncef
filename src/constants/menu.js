import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [{
  id: "single",
  icon: "simple-icon-home",
  label: "menu.single",
  to: `${adminRoot}/single`,
},
{
  id: "piaf",
  icon: "simple-icon-plane",
  label: "menu.piaf",
  to: `${adminRoot}/piaf`,
  subs: [
     
    {

    icon: "iconsminds-map-marker-2",
    label: "L'île de Pâques",
    to: `${adminRoot}/piaf/Point1`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{

    icon: "iconsminds-map-marker-2",
    label: "Paracas",
    to: `${adminRoot}/piaf/Point2`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  {
    icon: "iconsminds-map-marker-2",
    label: "Nazca",
    to: `${adminRoot}/piaf/Point3`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  {
    icon: "iconsminds-map-marker-2",
    label: "Ollantaytambo",
    to: `${adminRoot}/piaf/Point4`,
    // roles: [UserRole.Admin, UserRole.Editor],
  }  ,{
    icon: "iconsminds-map-marker-2",
    label: "Machu Picchu",
    to: `${adminRoot}/piaf/Point5`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Sacsayhuamán",
    to: `${adminRoot}/piaf/Point6`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Le pays Dogon",
    to: `${adminRoot}/piaf/Point7`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Tassili n’Ajjer ",
    to: `${adminRoot}/piaf/Point8`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Siwa",
    to: `${adminRoot}/piaf/Point9`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Gizeh",
    to: `${adminRoot}/piaf/Point10`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Pétra",
    to: `${adminRoot}/piaf/Point11`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Ur",
    to: `${adminRoot}/piaf/Point12`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Persépolis ",
    to: `${adminRoot}/piaf/Point13`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Mohenjo-daro",
    to: `${adminRoot}/piaf/Point14`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Khajurâho ",
    to: `${adminRoot}/piaf/Point15`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Pyay",
    to: `${adminRoot}/piaf/Point16`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Sukhothaï",
    to: `${adminRoot}/piaf/Point17`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Angkor Vat",
    to: `${adminRoot}/piaf/Point18`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },{
    icon: "iconsminds-map-marker-2",
    label: "Preah Vihear",
    to: `${adminRoot}/piaf/Point19`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  ]
} 

 
];
export default data;
