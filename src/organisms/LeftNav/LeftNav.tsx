//import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
const React = require('react');

//const Drawer = require('material-ui/Drawer');
//const MenuItem = require('material-ui/MenuItem');

type menuItem  = {
    name: string,
    route: string
};

export interface INavigation {
    menuItems: menuItem[],
};

export const Navigation:React.FC<INavigation> = (props) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    const toggleDrawer = (anchor: any, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    return (
        <div key={'left'}>
             {/* <AppBar position="static"/>  */}
            <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)}>Menu</Button>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {props.menuItems && props.menuItems.map((item, idx) => {
                        return <MenuItem href={item.route}>{item.name}</MenuItem>
                    })}
                    
                </Drawer>
            </React.Fragment>

            {/*
            <MenuItem onTouchTap={()=>{}}>Batting Average</MenuItem> */}
        </div>
    );
};

export default Navigation;