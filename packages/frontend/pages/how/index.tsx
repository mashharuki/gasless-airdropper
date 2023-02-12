import type { NextPage } from "next";
import { Layout } from "@/components/Layout";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const How: NextPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Layout>
        <h1>仕組み</h1>
        <Link href={"https://www.canva.com/design/DAFZ_eLoFgo/ICO3g2xu8Ssr_0Bv0Z38wQ/view?utm_content=DAFZ_eLoFgo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"} target="_blank">こちらで紹介しています</Link>
      </Layout>      
    </Box>
  );
};

export default How;
