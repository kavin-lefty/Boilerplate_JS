import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FetchUsers } from "../services/services";
import { Button, Input, Table } from "antd";
import { FaSyncAlt } from "react-icons/fa";
import { PlusOutlined } from "@ant-design/icons";

export default function Users() {
  const [strPage, SetStrPage] = useState(1);
  const [strSearch, SetStrSearch] = useState("");

  const { data, error, isPending, refetch } = useQuery({
    queryKey: ["users", { strPage, strSearch }],
    queryFn: async ({ queryKey }) => {
      const [, { strPage, strSearch }] = queryKey;
      let payload = {
        strPage,
        strSearch,
      };
      return await FetchUsers(payload);
    },
  });

  const fullUsersList = data?.arrList;
  const pageSize = data?.pagination?.pageSize ?? 10;
  const totalPages = data?.pagination?.total ?? 0;

  const columns = [
    {
      title: "Sl.No",
      dataIndex: "slNo",
      width: 50,
      render: (value, record, index) => `${value || index + 1}`,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
    },
    {
      title: "email",
      dataIndex: "email",
      sorter: true,
    },
  ];

  const handleResetFilters = () => {
    SetStrPage(1);
    SetStrSearch("");
    refetch();
  };

  return (
    <>
      <section>
        <div className="flex justify-between my-5">
          <div>
            <h3 className="md:text-lg font-semibold">Users List</h3>
          </div>
          <div className="flex gap-3">
            <Input
              allowClear
              value={strSearch}
              placeholder="Search..."
              style={{ height: 33 }}
              onChange={(e) => {
                SetStrSearch(e.target.value.trimStart());
                SetStrPage(1);
              }}
            />
            <Button
              onClick={handleResetFilters}
              icon={<FaSyncAlt />}
              className="!border !border-gray-300 !rounded-none hover:!bg-gray-50 !text-black font-semibold"
            >
              Refresh
            </Button>
            <Button
              // onClick={() => SetCrudToggle("addProfile")}
              type="primary"
              className="!bg-[#003f6b] !hover:bg-[#002b4c] !rounded-none !text-white font-semibold"
              icon={<PlusOutlined />}
            >
              Add user
            </Button>
          </div>
        </div>
        <Table
          rowClassName={() => `cursor-pointer`}
          onRow={(record) => ({
            onDoubleClick: () => {
              console.log("double click content");
            },
          })}
          showSorterTooltip
          columns={columns}
          loading={isPending}
          rowKey="_id"
          dataSource={fullUsersList}
          onChange={(pagination, filters, sorter) => {
            SetStrPage(pagination?.current);
          }}
          pagination={{
            total: totalPages,
            pageSize: pageSize,
            showSizeChanger: false,
          }}
        />
      </section>
    </>
  );
}
