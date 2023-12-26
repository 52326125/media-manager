import styles from './style/default.module.sass'

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { Link, Outlet, useLocation } from 'react-router-dom'
import SideBar from '@/components/layout/SideBar'

export default function DefaultLayout() {
  const { pathname } = useLocation()
  return (
    <div className={styles['layout-wrapper']}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton>
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" sx={{ m: 1 }}>
            Media Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={styles['content-wrapper']}>
        {pathname !== '/' && <SideBar />}
        <Outlet />
      </div>
    </div>
  )
}
