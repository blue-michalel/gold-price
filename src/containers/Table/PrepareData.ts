class PrepareData {
  private accessors: string[];
  constructor(private props: Object) {
    this.accessors = [];
  }

  prepare() {
    const columns = this.prepareColumns();
    const data = this.prepareData();

    return { data, columns };
  }

  private prepareData() {
    return this.props;
  }

  private prepareColumns() {
    const col = new Set<string>();

    Object.values(this.props).forEach((keys) => {
      Object.keys(keys).forEach((key) => {
        col.add(key);
      });
    });

    this.accessors = Array.from(col);

    const data = this.accessors.map((el) => ({
      Header: el,
      accessor: el,
    }));

    return data;
  }
}

export default PrepareData;
