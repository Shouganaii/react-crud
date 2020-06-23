import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#3f51b5',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);