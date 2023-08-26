interface AssetFields {
  title: string;
  description: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
}

interface Asset {
  fields: AssetFields;
}

interface CategoryEntryFields {
  categories: string[];
  title: string;
}

interface CategoryEntry {
  fields: CategoryEntryFields;
}

interface EntryFields {
  icon: Asset;
  categories: CategoryEntry;
  title: string;
}

interface Entry {
  fields: EntryFields;
}

export interface ReturnHeader {
  items: Entry[];
}

export interface Header {
  icon: AssetFields;
  categories: CategoryEntryFields;
}
