import {useEffect, useState} from "react";
import DataViewService from "utils/services/DataViewService";
import { getTableFormat } from "utils/services/DataViewService";
import LayoutTitle from "components/LayoutTitle/LayoutTitle";
import { DataViewContainer } from "assets/styles/layouts/DataView/DataViewStyles";
import { DataViewCard } from "assets/styles/layouts/DataView/DataViewStyles";
import CustomTable from "components/Table";
import Loader from "components/Loader";
import Card from "components/Card/Card";

const DataView = () => {

    useEffect(() => {
        services();
    }, []);

    const services = async () => {
        const result = await DataViewService();
        setData(result);
    }

    const [data, setData] = useState(null);

    return (
        <DataViewContainer>
            <LayoutTitle />
            {data ? (
               <Card width="100%" headerText="Data Viewer">
                    <CustomTable tableData={getTableFormat(data)} rows={15} />
                </Card>
            ) : (
                <Loader />
            )}
        </DataViewContainer>
    );
};

export default DataView;