import {
  Avatar,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/3.jpg";
import image3 from "../assets/images/7.jpg";
import image4 from "../assets/images/8.jpg";
import image5 from "../assets/images/9.jpg";
const RecentOrders: React.FC = () => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const data = [
    {
      name: "Wade Warren",
      orderNo: 123456,
      amount: "$124.00",
      status: "Delivered",
      pic: image2,
    },
    {
      name: "Jane Cooper",
      orderNo: 654321,
      amount: "$365.00",
      status: "Cancelled",
      pic: image1,
    },
    {
      name: "Guy Hawkins",
      orderNo: 987654,
      amount: "$456.00",
      status: "Cancelled",
      pic: image3,
    },
    {
      name: "Kristin Watson",
      orderNo: 345678,
      amount: "$234.00",
      status: "Pending",
      pic: image4,
    },
    {
      name: "Cody Fisher",
      orderNo: 987653,
      amount: "$567.00",
      status: "Delivered",
      pic: image5,
    },
    {
      name: "Savannah Nguyen",
      orderNo: 897678,
      amount: "$678.00",
      status: "Pending",
      pic: image1,
    },
  ];

  return (
    <Grid item xs={12} md={8}>
      <Item>
        <Typography
          variant="h6"
          sx={{ fontSize: 15, fontWeight: 600 }}
          textAlign={"start"}
        >
          Recent Orders
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Order No</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ display: "flex", alignItems: "center" }}
                    component="th"
                    scope="row"
                  >
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      src={row.pic}
                      alt={row.name}
                    >
                      {!row.pic && row.name[0]}
                    </Avatar>
                    <span>&nbsp;{row.name}</span>
                  </TableCell>
                  <TableCell align="right">{row.orderNo}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">
                    {row.status === "Delivered" ? (
                      <span
                        style={{
                          color: "rgb(65 181 109)",
                          background: "rgb(17 84 42)",
                        }}
                        className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
                      >
                        Delivered
                      </span>
                    ) : row.status === "Cancelled" ? (
                      <span
                        style={{
                          color: "rgb(219 28 46)",
                          background: "rgb(149 39 39 / 82%)",
                        }}
                        className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
                      >
                        Cancelled
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                        Pending
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Item>
    </Grid>
  );
};

export default RecentOrders;
