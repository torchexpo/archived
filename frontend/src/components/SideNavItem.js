import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemGraphic, ListItemText } from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';
import { Link } from 'react-router-dom';

const SideNavItem = (props) => {
  const { item, selectedIndex } = props;
  const { id, name, image, icon, link } = item;
  return link.includes('http') ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <ListItem
        selected={id === selectedIndex}
        onClick={() => window.dispatchEvent(new CustomEvent('sidenav'))}
      >
        {icon ? (
          <ListItemGraphic graphic={<MaterialIcon icon={icon} />} />
        ) : (
          <></>
        )}
        {image ? (
          <ListItemGraphic
            graphic={<img src={`/assets/${image}`} alt={name} />}
          />
        ) : (
          <></>
        )}
        <ListItemText primaryText={name} />
      </ListItem>
    </a>
  ) : (
    <Link to={link}>
      <ListItem
        selected={id === selectedIndex}
        onClick={() => window.dispatchEvent(new CustomEvent('sidenav'))}
      >
        {icon ? (
          <ListItemGraphic graphic={<MaterialIcon icon={icon} />} />
        ) : (
          <></>
        )}
        {image ? (
          <ListItemGraphic
            graphic={<img src={`/assets/${image}`} alt={name} />}
          />
        ) : (
          <></>
        )}
        <ListItemText primaryText={name} />
      </ListItem>
    </Link>
  );
};

SideNavItem.propTypes = {
  selectedIndex: PropTypes.number,
  item: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  }),
};

SideNavItem.defaultProps = {
  selectedIndex: -1,
  item: {
    id: 1,
    icon: null,
    image: null,
    link: null,
  },
};

export default SideNavItem;
