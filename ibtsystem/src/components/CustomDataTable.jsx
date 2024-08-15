import React from 'react';
import DataTable from 'react-data-table-component';
import { Spinner } from 'flowbite-react';

const options = {
    rowsPerPageText: "Registros por página:",
    rangeSeparatorText: "de",
};

const Loading = () => {
    return (
        <div className='flex flex-wrap gap-2'>
            <div className='text-center'>
                <Spinner />
            </div>
        </div>
    );
}

const CustomDataTable = ({ columns, data, isLoading, paginationOptions }) => {
    return (
        <DataTable
            columns={columns}
            data={data}
            progressPending={isLoading}
            pagination
            paginationComponentOptions={paginationOptions}
            noDataComponent={<>Data not available...</>}
        />
    );
}

export default CustomDataTable;