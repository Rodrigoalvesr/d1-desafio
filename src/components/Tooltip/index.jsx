import MuiTooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const Tooltip = withStyles((theme) => ({
  tooltip: {
    color: '#9D9D9D',
    fontSize: 12,
    fontWeight: 'bold',
    padding: theme.spacing(1),
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.common.white,
  },
  arrow: {
    color: theme.palette.common.white,
  },
}))(MuiTooltip);

export default Tooltip;
