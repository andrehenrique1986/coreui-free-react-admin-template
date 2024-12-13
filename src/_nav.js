import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilCalendar, cilDrop, cilFile, cilHome, cilLockLocked, cilPaperclip, cilPeople, cilSpeedometer, cilUser, cilWarning } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'
import { name } from 'eslint-plugin-prettier'

const _nav = [
  {
    component: CNavItem,
    name: 'Painel Geral',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavTitle,
    name: 'Gestão',
  },
  {
    component: CNavItem,
    name: 'Avisos',
    to: '/avisos',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Documentos',
    to: '/documentos',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reservas',
    to: '/reservas',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Ocorrências',
    to: '/ocorrencias',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Achados e Perdidos',
    to: '/achadoseperdidos',
    icon: <CIcon icon={cilLockLocked} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Dados',
  },
  {
    component: CNavItem,
    name: 'Usuários',
    to: '/usuarios',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Unidades',
    to: '/unidades',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Áreas Comuns',
    to: '/areascomuns',
    icon: <CIcon icon={cilPaperclip} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Configurações',
  },
  {
    component: CNavItem,
    name: 'Meu Perfil',
    to: '/meuperfil',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Sair',
    to: '/logout',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
]

export default _nav
