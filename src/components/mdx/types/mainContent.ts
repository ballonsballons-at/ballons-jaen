import { ChakraProps } from '@chakra-ui/react';
//import { ICodeSnippetProps } from '../code-snippet/CodeSnippet';
//import { IFileSystemProps } from '../filesystem/Filesystem';
import { IHeadingProps } from '../heading/Heading';
import { IListProps } from '../list/List';
import { ITextProps } from '../text/Text';

export enum MainContentType {
  Heading,
  Text,
  List,
  CodeSnippet,
  Filesystem
}

export interface IMainContentComponentBaseProps {
  baseProps?: ChakraProps;
}

export interface IMainContentComponent {
  type: MainContentType;
}

export interface IHeadingComponent
  extends IMainContentComponent,
    IHeadingProps {
  type: MainContentType.Heading;
}

export interface ITextComponent extends IMainContentComponent, ITextProps {
  type: MainContentType.Text;
}

export interface IListComponent extends IMainContentComponent, IListProps {
  type: MainContentType.List;
}

// export interface IFilesystemComponent
//   extends IMainContentComponent,
//     IFileSystemProps {
//   type: MainContentType.Filesystem;
// }

// export interface ICodeSnippetComponent
//   extends IMainContentComponent,
//     ICodeSnippetProps {
//   type: MainContentType.CodeSnippet;
// }

export type MainContentItem =
  | IHeadingComponent
  | ITextComponent
  | IListComponent;
//   | IFilesystemComponent
//   | ICodeSnippetComponent;