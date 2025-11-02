const Footer = () => {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Cột trái - Thông tin nhóm */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">
              MLN122 – FPT University
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Nhóm sinh viên nghiên cứu về trí tuệ nhân tạo và người lao động
            </p>
          </div>

          {/* Cột phải - Trích dẫn học thuật */}
          <div className="text-center md:text-right max-w-sm">
            <p className="text-sm text-muted-foreground italic">
              “Trong thời đại trí tuệ nhân tạo, lao động của con người không mất đi – 
              mà chuyển hóa thành sáng tạo, tri thức và giá trị nhân văn.”
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              – Phân tích theo tư tưởng C. Mác về lao động và giá trị thặng dư
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
