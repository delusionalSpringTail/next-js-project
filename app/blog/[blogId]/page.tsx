import React from "react";

interface BlogDetailsProps {
  params: Promise<{
    blogId: string;
  }>;
}

const BlogDetails = async ({ params }: BlogDetailsProps) => {
  const { blogId } = await params;
  return (
    <div>
      blog details page
      <div>blog id form url : {blogId}</div>
    </div>
  );
};

export default BlogDetails;
