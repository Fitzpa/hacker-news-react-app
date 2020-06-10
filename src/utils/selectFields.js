class SelectFields {
  static hackerNews = ({ id, by, url, time, title } = {}) => ({
    id,
    by,
    url,
    time,
    title,
  });
}

export default SelectFields;
