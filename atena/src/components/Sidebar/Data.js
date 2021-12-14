import React from "react"
import ListAltIcon from '@mui/icons-material/ListAlt';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ContactsIcon from '@mui/icons-material/Contacts';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const Data = [
	{
		title: "Dashboard",
		icon: <DashboardIcon />,
		link: "/dashboard"
	},
	{
		title: "Eventos",
		icon: <ListAltIcon />,
		link: "/#"
	},
	{
		title: "Disciplinas",
		icon: <CollectionsBookmarkIcon />,
		link: "#"
	},
	{
		title: "Turmas",
		icon: <ContactsIcon />,
		link: "#"
	}
]