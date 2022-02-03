// Generated from parser/PParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ParenModuleExprContext } from "./PParser";
import { PrimitiveModuleExprContext } from "./PParser";
import { NamedModuleContext } from "./PParser";
import { ComposeModuleExprContext } from "./PParser";
import { UnionModuleExprContext } from "./PParser";
import { HideEventsModuleExprContext } from "./PParser";
import { HideInterfacesModuleExprContext } from "./PParser";
import { AssertModuleExprContext } from "./PParser";
import { RenameModuleExprContext } from "./PParser";
import { MainMachineModuleExprContext } from "./PParser";
import { SeqTypeContext } from "./PParser";
import { SetTypeContext } from "./PParser";
import { MapTypeContext } from "./PParser";
import { TupleTypeContext } from "./PParser";
import { NamedTupleTypeContext } from "./PParser";
import { PrimitiveTypeContext } from "./PParser";
import { NamedTypeContext } from "./PParser";
import { DecimalFloatContext } from "./PParser";
import { ExpFloatContext } from "./PParser";
import { StateEntryContext } from "./PParser";
import { StateExitContext } from "./PParser";
import { StateDeferContext } from "./PParser";
import { StateIgnoreContext } from "./PParser";
import { OnEventDoActionContext } from "./PParser";
import { OnEventGotoStateContext } from "./PParser";
import { SafetyTestDeclContext } from "./PParser";
import { RefinementTestDeclContext } from "./PParser";
import { MachineReceiveContext } from "./PParser";
import { MachineSendContext } from "./PParser";
import { ForeignFunDeclContext } from "./PParser";
import { PFunDeclContext } from "./PParser";
import { CompoundStmtContext } from "./PParser";
import { AssertStmtContext } from "./PParser";
import { PrintStmtContext } from "./PParser";
import { ReturnStmtContext } from "./PParser";
import { BreakStmtContext } from "./PParser";
import { ContinueStmtContext } from "./PParser";
import { AssignStmtContext } from "./PParser";
import { InsertStmtContext } from "./PParser";
import { AddStmtContext } from "./PParser";
import { RemoveStmtContext } from "./PParser";
import { WhileStmtContext } from "./PParser";
import { IfStmtContext } from "./PParser";
import { CtorStmtContext } from "./PParser";
import { FunCallStmtContext } from "./PParser";
import { RaiseStmtContext } from "./PParser";
import { SendStmtContext } from "./PParser";
import { AnnounceStmtContext } from "./PParser";
import { GotoStmtContext } from "./PParser";
import { ReceiveStmtContext } from "./PParser";
import { NoStmtContext } from "./PParser";
import { PrimitiveExprContext } from "./PParser";
import { UnnamedTupleExprContext } from "./PParser";
import { NamedTupleExprContext } from "./PParser";
import { ParenExprContext } from "./PParser";
import { NamedTupleAccessExprContext } from "./PParser";
import { TupleAccessExprContext } from "./PParser";
import { SeqAccessExprContext } from "./PParser";
import { KeywordExprContext } from "./PParser";
import { CtorExprContext } from "./PParser";
import { FunCallExprContext } from "./PParser";
import { UnaryExprContext } from "./PParser";
import { BinExprContext } from "./PParser";
import { CastExprContext } from "./PParser";
import { ChooseExprContext } from "./PParser";
import { StringExprContext } from "./PParser";
import { ForeignTypeDefContext } from "./PParser";
import { PTypeDefContext } from "./PParser";
import { VarLvalueContext } from "./PParser";
import { NamedTupleLvalueContext } from "./PParser";
import { TupleLvalueContext } from "./PParser";
import { MapOrSeqLvalueContext } from "./PParser";
import { ProgramContext } from "./PParser";
import { IdenContext } from "./PParser";
import { IntContext } from "./PParser";
import { TypeContext } from "./PParser";
import { IdenTypeListContext } from "./PParser";
import { IdenTypeContext } from "./PParser";
import { FunParamListContext } from "./PParser";
import { FunParamContext } from "./PParser";
import { TopDeclContext } from "./PParser";
import { TypeDefDeclContext } from "./PParser";
import { EnumTypeDefDeclContext } from "./PParser";
import { EnumElemListContext } from "./PParser";
import { EnumElemContext } from "./PParser";
import { NumberedEnumElemListContext } from "./PParser";
import { NumberedEnumElemContext } from "./PParser";
import { EventDeclContext } from "./PParser";
import { CardinalityContext } from "./PParser";
import { EventSetDeclContext } from "./PParser";
import { EventSetLiteralContext } from "./PParser";
import { InterfaceDeclContext } from "./PParser";
import { ImplMachineDeclContext } from "./PParser";
import { IdenListContext } from "./PParser";
import { ReceivesSendsContext } from "./PParser";
import { SpecMachineDeclContext } from "./PParser";
import { MachineBodyContext } from "./PParser";
import { MachineEntryContext } from "./PParser";
import { VarDeclContext } from "./PParser";
import { FunDeclContext } from "./PParser";
import { GroupContext } from "./PParser";
import { GroupItemContext } from "./PParser";
import { StateDeclContext } from "./PParser";
import { StateBodyItemContext } from "./PParser";
import { NonDefaultEventListContext } from "./PParser";
import { NonDefaultEventContext } from "./PParser";
import { EventListContext } from "./PParser";
import { EventIdContext } from "./PParser";
import { StateNameContext } from "./PParser";
import { FunctionBodyContext } from "./PParser";
import { StatementContext } from "./PParser";
import { LvalueContext } from "./PParser";
import { RecvCaseContext } from "./PParser";
import { AnonEventHandlerContext } from "./PParser";
import { NoParamAnonEventHandlerContext } from "./PParser";
import { ExprContext } from "./PParser";
import { FormatedStringContext } from "./PParser";
import { PrimitiveContext } from "./PParser";
import { FloatLiteralContext } from "./PParser";
import { UnnamedTupleBodyContext } from "./PParser";
import { NamedTupleBodyContext } from "./PParser";
import { RvalueListContext } from "./PParser";
import { RvalueContext } from "./PParser";
import { ModExprContext } from "./PParser";
import { BindExprContext } from "./PParser";
import { NamedModuleDeclContext } from "./PParser";
import { TestDeclContext } from "./PParser";
import { ImplementationDeclContext } from "./PParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ParenModuleExpr`
	 * labeled alternative in `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenModuleExpr?: (ctx: ParenModuleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrimitiveModuleExpr`
	 * labeled alternative in `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveModuleExpr?: (ctx: PrimitiveModuleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `NamedModule`
	 * labeled alternative in `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedModule?: (ctx: NamedModuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `ComposeModuleExpr`
	 * labeled alternative in `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComposeModuleExpr?: (ctx: ComposeModuleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnionModuleExpr`
	 * labeled alternative in `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionModuleExpr?: (ctx: UnionModuleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `HideEventsModuleExpr`
	 * labeled alternative in `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHideEventsModuleExpr?: (ctx: HideEventsModuleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `HideInterfacesModuleExpr`
	 * labeled alternative in `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHideInterfacesModuleExpr?: (ctx: HideInterfacesModuleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssertModuleExpr`
	 * labeled alternative in `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertModuleExpr?: (ctx: AssertModuleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `RenameModuleExpr`
	 * labeled alternative in `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameModuleExpr?: (ctx: RenameModuleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MainMachineModuleExpr`
	 * labeled alternative in `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMainMachineModuleExpr?: (ctx: MainMachineModuleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `SeqType`
	 * labeled alternative in `PParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeqType?: (ctx: SeqTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `SetType`
	 * labeled alternative in `PParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetType?: (ctx: SetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `MapType`
	 * labeled alternative in `PParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapType?: (ctx: MapTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleType`
	 * labeled alternative in `PParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `NamedTupleType`
	 * labeled alternative in `PParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedTupleType?: (ctx: NamedTupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrimitiveType`
	 * labeled alternative in `PParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `NamedType`
	 * labeled alternative in `PParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedType?: (ctx: NamedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `DecimalFloat`
	 * labeled alternative in `PParser.floatLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalFloat?: (ctx: DecimalFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpFloat`
	 * labeled alternative in `PParser.floatLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpFloat?: (ctx: ExpFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateEntry`
	 * labeled alternative in `PParser.stateBodyItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateEntry?: (ctx: StateEntryContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateExit`
	 * labeled alternative in `PParser.stateBodyItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateExit?: (ctx: StateExitContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateDefer`
	 * labeled alternative in `PParser.stateBodyItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateDefer?: (ctx: StateDeferContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateIgnore`
	 * labeled alternative in `PParser.stateBodyItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateIgnore?: (ctx: StateIgnoreContext) => Result;

	/**
	 * Visit a parse tree produced by the `OnEventDoAction`
	 * labeled alternative in `PParser.stateBodyItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnEventDoAction?: (ctx: OnEventDoActionContext) => Result;

	/**
	 * Visit a parse tree produced by the `OnEventGotoState`
	 * labeled alternative in `PParser.stateBodyItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnEventGotoState?: (ctx: OnEventGotoStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `SafetyTestDecl`
	 * labeled alternative in `PParser.testDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSafetyTestDecl?: (ctx: SafetyTestDeclContext) => Result;

	/**
	 * Visit a parse tree produced by the `RefinementTestDecl`
	 * labeled alternative in `PParser.testDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefinementTestDecl?: (ctx: RefinementTestDeclContext) => Result;

	/**
	 * Visit a parse tree produced by the `MachineReceive`
	 * labeled alternative in `PParser.receivesSends`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMachineReceive?: (ctx: MachineReceiveContext) => Result;

	/**
	 * Visit a parse tree produced by the `MachineSend`
	 * labeled alternative in `PParser.receivesSends`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMachineSend?: (ctx: MachineSendContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForeignFunDecl`
	 * labeled alternative in `PParser.funDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeignFunDecl?: (ctx: ForeignFunDeclContext) => Result;

	/**
	 * Visit a parse tree produced by the `PFunDecl`
	 * labeled alternative in `PParser.funDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPFunDecl?: (ctx: PFunDeclContext) => Result;

	/**
	 * Visit a parse tree produced by the `CompoundStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStmt?: (ctx: CompoundStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssertStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStmt?: (ctx: AssertStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrintStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStmt?: (ctx: PrintStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReturnStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `BreakStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStmt?: (ctx: BreakStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ContinueStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStmt?: (ctx: ContinueStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStmt?: (ctx: AssignStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `InsertStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStmt?: (ctx: InsertStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddStmt?: (ctx: AddStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `RemoveStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemoveStmt?: (ctx: RemoveStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `WhileStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `IfStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `CtorStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCtorStmt?: (ctx: CtorStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunCallStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunCallStmt?: (ctx: FunCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `RaiseStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaiseStmt?: (ctx: RaiseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `SendStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSendStmt?: (ctx: SendStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `AnnounceStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnounceStmt?: (ctx: AnnounceStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `GotoStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotoStmt?: (ctx: GotoStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReceiveStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiveStmt?: (ctx: ReceiveStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `NoStmt`
	 * labeled alternative in `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoStmt?: (ctx: NoStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrimitiveExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveExpr?: (ctx: PrimitiveExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnnamedTupleExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnamedTupleExpr?: (ctx: UnnamedTupleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `NamedTupleExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedTupleExpr?: (ctx: NamedTupleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpr?: (ctx: ParenExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `NamedTupleAccessExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedTupleAccessExpr?: (ctx: NamedTupleAccessExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleAccessExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleAccessExpr?: (ctx: TupleAccessExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `SeqAccessExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeqAccessExpr?: (ctx: SeqAccessExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `KeywordExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywordExpr?: (ctx: KeywordExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `CtorExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCtorExpr?: (ctx: CtorExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunCallExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunCallExpr?: (ctx: FunCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `BinExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinExpr?: (ctx: BinExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `CastExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpr?: (ctx: CastExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ChooseExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChooseExpr?: (ctx: ChooseExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringExpr`
	 * labeled alternative in `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpr?: (ctx: StringExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForeignTypeDef`
	 * labeled alternative in `PParser.typeDefDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeignTypeDef?: (ctx: ForeignTypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by the `PTypeDef`
	 * labeled alternative in `PParser.typeDefDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPTypeDef?: (ctx: PTypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by the `VarLvalue`
	 * labeled alternative in `PParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarLvalue?: (ctx: VarLvalueContext) => Result;

	/**
	 * Visit a parse tree produced by the `NamedTupleLvalue`
	 * labeled alternative in `PParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedTupleLvalue?: (ctx: NamedTupleLvalueContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleLvalue`
	 * labeled alternative in `PParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleLvalue?: (ctx: TupleLvalueContext) => Result;

	/**
	 * Visit a parse tree produced by the `MapOrSeqLvalue`
	 * labeled alternative in `PParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapOrSeqLvalue?: (ctx: MapOrSeqLvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.iden`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIden?: (ctx: IdenContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.idenTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdenTypeList?: (ctx: IdenTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.idenType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdenType?: (ctx: IdenTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.funParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunParamList?: (ctx: FunParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.funParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunParam?: (ctx: FunParamContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.topDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopDecl?: (ctx: TopDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.typeDefDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefDecl?: (ctx: TypeDefDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.enumTypeDefDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumTypeDefDecl?: (ctx: EnumTypeDefDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.enumElemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumElemList?: (ctx: EnumElemListContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.enumElem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumElem?: (ctx: EnumElemContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.numberedEnumElemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberedEnumElemList?: (ctx: NumberedEnumElemListContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.numberedEnumElem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberedEnumElem?: (ctx: NumberedEnumElemContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.eventDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventDecl?: (ctx: EventDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.cardinality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCardinality?: (ctx: CardinalityContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.eventSetDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventSetDecl?: (ctx: EventSetDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.eventSetLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventSetLiteral?: (ctx: EventSetLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.interfaceDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDecl?: (ctx: InterfaceDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.implMachineDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplMachineDecl?: (ctx: ImplMachineDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.idenList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdenList?: (ctx: IdenListContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.receivesSends`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceivesSends?: (ctx: ReceivesSendsContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.specMachineDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecMachineDecl?: (ctx: SpecMachineDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.machineBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMachineBody?: (ctx: MachineBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.machineEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMachineEntry?: (ctx: MachineEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.funDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunDecl?: (ctx: FunDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.groupItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupItem?: (ctx: GroupItemContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.stateDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateDecl?: (ctx: StateDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.stateBodyItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateBodyItem?: (ctx: StateBodyItemContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.nonDefaultEventList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonDefaultEventList?: (ctx: NonDefaultEventListContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.nonDefaultEvent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonDefaultEvent?: (ctx: NonDefaultEventContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.eventList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventList?: (ctx: EventListContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.eventId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventId?: (ctx: EventIdContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.stateName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateName?: (ctx: StateNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue?: (ctx: LvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.recvCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecvCase?: (ctx: RecvCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.anonEventHandler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonEventHandler?: (ctx: AnonEventHandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.noParamAnonEventHandler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoParamAnonEventHandler?: (ctx: NoParamAnonEventHandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.formatedString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormatedString?: (ctx: FormatedStringContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.primitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitive?: (ctx: PrimitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.floatLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.unnamedTupleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnamedTupleBody?: (ctx: UnnamedTupleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.namedTupleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedTupleBody?: (ctx: NamedTupleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.rvalueList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRvalueList?: (ctx: RvalueListContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.rvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRvalue?: (ctx: RvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.modExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModExpr?: (ctx: ModExprContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.bindExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindExpr?: (ctx: BindExprContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.namedModuleDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedModuleDecl?: (ctx: NamedModuleDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.testDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestDecl?: (ctx: TestDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PParser.implementationDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementationDecl?: (ctx: ImplementationDeclContext) => Result;
}

