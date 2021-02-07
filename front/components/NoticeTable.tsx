const NoticeTable = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        Notice
            </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          Show 셀렉트박스 entries
              </div>
        <div>
          Search:
              </div>
      </div>
      <div>
        <div style={{ border: '2px solid #dee2e6', display: 'flex', flexDirection: 'column' }}>
          <div style={{ borderBottom: '2px solid #dee2e6', height: 50, display: 'flex' }}>
            <div style={{ flex: 1, borderRight: '2px solid #dee2e6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              NO
                  </div>
            <div style={{ flex: 4, borderRight: '2px solid #dee2e6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              제목
                  </div>
            <div style={{ flex: 1.5, borderRight: '2px solid #dee2e6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              작성자
                  </div>
            <div style={{ flex: 1.5, borderRight: '2px solid #dee2e6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              작성일
                  </div>
            <div style={{ flex: 1, borderRight: '2px solid #dee2e6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              조회수
                  </div>
          </div>
          {
            noticeDummyData.map(e => {
              return (
                <div>

                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default NoticeTable;