import { ChangeEvent, ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface GlobalDateComponentProps {
  label: string;
  onChange?: any;
  placeholder?: string;
}

export interface GlobalInputComponentProps {
  label: string;
  placeholder: string;
  value: string;
  type: "text" | "number";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface Option {
  value: string;
  label: string;
}

export interface GlobalSelectComponentProps {
  label: string;
  placeholder: string;
  value?: any;
  options?: Option[];
  onChange?: (selectedOption: Option | null) => void;
  noOptionsMessage?:string;
}

export interface Category {
  _id: string;
  title: string;
  image: string;
}

export interface SubCategory {
  _id: string;
  title: string;
  categoryId: string;
  image: string;
}

export interface DiscoverTheme {
  _id: string;
  title: string;
  isEnabled: boolean;
  image: string;
}

export interface DashboardItemProps {
  iconSrc: string;
  title: string;
  linkHref?: string;
}




export interface EditStoryProps {
  draftId: string;
}

export interface NewsTableComponentProps {
  data: News[];
  selectedRows: string[];
  onDeleteClick: (newsId: string) => void;
}

export interface News {
  updatedAt: string | number | Date;
  _id: string;
  title: string;
  createdAt: string;
  image: string;
  categoryId: string;
  categoryTitle: string;
  status: string;
}

export interface DatePickerProps {
  onBulkScheduleConfirm: (scheduledDate: string) => void;
  onCancel: () => void;
}

export interface DraftFilterComponentProps {
  title?: string;
  statusFilter: string;
  scheduleFilter: string;
  sortOrder: string;
  searchQuery: string;
  onStatusChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onScheduleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  scheduleFilterVisible?:boolean;
}

export interface DraftsPaginationProps {
  currentPage: number;
  totalPageCount: number;
  handlePageChange: (newPage: number) => void;
  startIndex: number;
  endIndex: number;
  totalEntries: number;
}

export interface DraftTableComponentProps {
  data: Draft[];
  selectedRows: string[];
  onCheckboxChange: (id: string) => void;
  onDeleteClick: (draftId: string) => void;
  onBulkScheduleClick: (scheduledDate: string) => void;
}
export interface Draft {
  updatedAt: string | number | Date;
  _id: string;
  title: string;
  createdAt: string;
  image: string;
  categoryId: string;
  categoryTitle: string;
}

export interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

export interface MenuItemProps {
  iconSrc: string;
  menuTitle: string;
  href: string;
  onClick?: () => void;
  isInactive?: boolean;
}