import {
    Navbar,
    Button,
    ActionIcon,
    UnstyledButton,
    Group,
    Text,
    Table
} from '@mantine/core';

import Styles from "../../styles/navbar.css"

const NavBarItem = (props) => {
    let item = props.data

    const buttonStyle = {
        // width: "100%",
        height: "100%",
        textAlign: "left",
        padding: 15,
    }

    const tableStyle = {
        fontSize: 16,
        width: 265,
        textAlign: "left",
        color: item.status == "Delivered" ? "#A0A0A0":"black",
        tableLayout: ""
    }

    console.log()

    return (
        <Navbar.Section >
            <Button variant='subtle' style={buttonStyle} >
                <Table style={tableStyle} >
                    <tr>
                        <th>Good:</th>
                        <td>{item.good}</td>
                    </tr>
                    <tr>
                        <th>Created Date:</th>
                        <td>{item.date}</td>
                    </tr>
                    <tr>
                        <th>Supplier:</th>
                        <td>{item.supplier}</td>
                    </tr>
                    <tr>
                        <th>Distributor:</th>
                        <td>{item.distributor}</td>
                    </tr>
                    <tr>
                        <th>Status:</th>
                        <td>{item.status}</td>
                    </tr>
                    <tr>
                        <td colspan="2" >
                            <hr />
                        </td>
                    </tr>
                </Table>
            </Button>
        </Navbar.Section>

    )
}

export default NavBarItem;