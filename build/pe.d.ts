declare module pe {
    class Long {
        lo: number;
        hi: number;
        constructor(lo: number, hi: number);
        toString(): string;
    }
}
declare module pe {
    interface AsyncCallback<T> {
        (error: Error, result: T): any;
        progress?: AsyncCallback.ProgressCallback;
    }
    module AsyncCallback {
        interface ProgressCallback {
            (value: number, total: number, text?: string): YieldCallback;
        }
        interface YieldCallback {
            (next: () => void): any;
        }
    }
}
declare module pe {
    function formatEnum(value: any, type: {}): string;
    function bytesToHex(bytes: Uint8Array): string;
}
declare module pe.headers {
    enum DataDirectoryKind {
        ExportSymbols = 0,
        ImportSymbols = 1,
        Resources = 2,
        Exception = 3,
        Security = 4,
        BaseRelocation = 5,
        Debug = 6,
        CopyrightString = 7,
        Unknown = 8,
        ThreadLocalStorage = 9,
        LoadConfiguration = 10,
        BoundImport = 11,
        ImportAddressTable = 12,
        DelayImport = 13,
        Clr = 14
    }
}
declare module pe.headers {
    enum DllCharacteristics {
        ProcessInit = 1,
        ProcessTerm = 2,
        ThreadInit = 4,
        ThreadTerm = 8,
        DynamicBase = 64,
        ForceIntegrity = 128,
        NxCompatible = 256,
        NoIsolation = 512,
        NoSEH = 1024,
        NoBind = 2048,
        AppContainer = 4096,
        WdmDriver = 8192,
        Reserved = 16384,
        TerminalServerAware = 32768
    }
}
declare module pe.headers {
    enum ImageCharacteristics {
        RelocsStripped = 1,
        ExecutableImage = 2,
        LineNumsStripped = 4,
        LocalSymsStripped = 8,
        AggressiveWsTrim = 16,
        LargeAddressAware = 32,
        BytesReversedLo = 128,
        Bit32Machine = 256,
        DebugStripped = 512,
        RemovableRunFromSwap = 1024,
        NetRunFromSwap = 2048,
        System = 4096,
        Dll = 8192,
        UpSystemOnly = 16384,
        BytesReversedHi = 32768
    }
}
declare module pe.headers {
    enum MZSignature {
        MZ
    }
}
declare module pe.headers {
    enum Machine {
        Unknown = 0,
        I386 = 332,
        R3000 = 354,
        R4000 = 358,
        R10000 = 360,
        WCEMIPSV2 = 361,
        Alpha = 388,
        SH3 = 418,
        SH3DSP = 419,
        SH3E = 420,
        SH4 = 422,
        SH5 = 424,
        ARM = 448,
        Thumb = 450,
        AM33 = 467,
        PowerPC = 496,
        PowerPCFP = 497,
        IA64 = 512,
        MIPS16 = 614,
        Alpha64 = 644,
        MIPSFPU = 870,
        MIPSFPU16 = 1126,
        AXP64 = 644,
        Tricore = 1312,
        CEF = 3311,
        EBC = 3772,
        AMD64 = 34404,
        M32R = 36929,
        CEE = 49390
    }
}
declare module pe.headers {
    enum PEMagic {
        NT32 = 267,
        NT64 = 523,
        ROM = 263
    }
}
declare module pe.headers {
    enum PESignature {
        PE
    }
}
declare module pe.headers {
    enum SectionCharacteristics {
        Reserved_0h = 0,
        Reserved_1h = 1,
        Reserved_2h = 2,
        Reserved_4h = 4,
        NoPadding = 8,
        Reserved_10h = 16,
        ContainsCode = 32,
        ContainsInitializedData = 64,
        ContainsUninitializedData = 128,
        LinkerOther = 256,
        LinkerInfo = 512,
        Reserved_400h = 1024,
        LinkerRemove = 2048,
        LinkerCOMDAT = 4096,
        Reserved_2000h = 8192,
        NoDeferredSpeculativeExecution = 16384,
        GlobalPointerRelative = 32768,
        Reserved_10000h = 65536,
        MemoryPurgeable = 131072,
        MemoryLocked = 262144,
        MemoryPreload = 524288,
        Align1Bytes = 1048576,
        Align2Bytes = 2097152,
        Align4Bytes = 3145728,
        Align8Bytes = 4194304,
        Align16Bytes = 5242880,
        Align32Bytes = 6291456,
        Align64Bytes = 7340032,
        Align128Bytes = 8388608,
        Align256Bytes = 9437184,
        Align512Bytes = 10485760,
        Align1024Bytes = 11534336,
        Align2048Bytes = 12582912,
        Align4096Bytes = 13631488,
        Align8192Bytes = 14680064,
        LinkerRelocationOverflow = 16777216,
        MemoryDiscardable = 33554432,
        MemoryNotCached = 67108864,
        MemoryNotPaged = 134217728,
        MemoryShared = 268435456,
        MemoryExecute = 536870912,
        MemoryRead = 1073741824,
        MemoryWrite = 2147483648
    }
}
declare module pe.headers {
    enum Subsystem {
        Unknown = 0,
        Native = 1,
        WindowsGUI = 2,
        WindowsCUI = 3,
        OS2CUI = 5,
        POSIXCUI = 7,
        NativeWindows = 8,
        WindowsCEGUI = 9,
        EFIApplication = 10,
        EFIBootServiceDriver = 11,
        EFIRuntimeDriver = 12,
        EFIROM = 13,
        XBOX = 14,
        BootApplication = 16
    }
}
declare module pe.managed.metadata {
    enum AssemblyFlags {
        PublicKey = 1,
        Retargetable = 256,
        DisableJITcompileOptimizer = 16384,
        EnableJITcompileTracking = 32768
    }
}
declare module pe.managed.metadata {
    enum AssemblyHashAlgorithm {
        None = 0,
        MD5 = 32771,
        SHA1 = 32772,
        SHA256 = 32780,
        SHA384 = 32781,
        SHA512 = 32782
    }
}
declare module pe.managed.metadata {
    enum CallingConventions {
        Default = 0,
        C = 1,
        StdCall = 2,
        FastCall = 4,
        VarArg = 5,
        Generic = 16,
        HasThis = 32,
        ExplicitThis = 64,
        Sentinel = 65
    }
}
declare module pe.managed.metadata {
    enum ClrImageFlags {
        ILOnly = 1,
        _32BitRequired = 2,
        ILLibrary = 4,
        StrongNameSigned = 8,
        NativeEntryPoint = 16,
        TrackDebugData = 65536,
        IsIbcoptimized = 131072
    }
}
declare module pe.managed.metadata {
    enum ClrMetadataSignature {
        Signature = 1112167234
    }
}
declare module pe.managed.metadata {
    enum ElementType {
        End = 0,
        Void = 1,
        Boolean = 2,
        Char = 3,
        I1 = 4,
        U1 = 5,
        I2 = 6,
        U2 = 7,
        I4 = 8,
        U4 = 9,
        I8 = 10,
        U8 = 11,
        R4 = 12,
        R8 = 13,
        String = 14,
        Ptr = 15,
        ByRef = 16,
        ValueType = 17,
        Class = 18,
        Var = 19,
        Array = 20,
        GenericInst = 21,
        TypedByRef = 22,
        I = 24,
        U = 25,
        FnPtr = 27,
        Object = 28,
        SZArray = 29,
        MVar = 30,
        CMod_ReqD = 31,
        CMod_Opt = 32,
        Internal = 33,
        Modifier = 64,
        Sentinel = 65,
        Pinned = 69,
        R4_Hfa = 70,
        R8_Hfa = 71,
        ArgumentType_ = 80,
        CustomAttribute_BoxedObject_ = 81,
        CustomAttribute_Field_ = 83,
        CustomAttribute_Property_ = 84,
        CustomAttribute_Enum_ = 85
    }
}
declare module pe.managed.metadata {
    enum EventAttributes {
        SpecialName = 512,
        RTSpecialName = 1024
    }
}
declare module pe.managed.metadata {
    enum FieldAttributes {
        FieldAccessMask = 7,
        CompilerControlled = 0,
        Private = 1,
        FamANDAssem = 2,
        Assembly = 3,
        Family = 4,
        FamORAssem = 5,
        Public = 6,
        Static = 16,
        InitOnly = 32,
        Literal = 64,
        NotSerialized = 128,
        SpecialName = 512,
        PInvokeImpl = 8192,
        RTSpecialName = 1024,
        HasFieldMarshal = 4096,
        HasDefault = 32768,
        HasFieldRVA = 256
    }
}
declare module pe.managed.metadata {
    enum FileAttributes {
        ContainsMetaData = 0,
        ContainsNoMetaData = 1
    }
}
declare module pe.managed.metadata {
    enum ManifestResourceAttributes {
        VisibilityMask = 7,
        Public = 1,
        Private = 2
    }
}
declare module pe.managed.metadata {
    enum MethodAttributes {
        MemberAccessMask = 7,
        CompilerControlled = 0,
        Private = 1,
        FamANDAssem = 2,
        Assem = 3,
        Family = 4,
        FamORAssem = 5,
        Public = 6,
        Static = 16,
        Final = 32,
        Virtual = 64,
        HideBySig = 128,
        VtableLayoutMask = 256,
        ReuseSlot = 0,
        NewSlot = 256,
        Strict = 512,
        Abstract = 1024,
        SpecialName = 2048,
        PInvokeImpl = 8192,
        UnmanagedExport = 8,
        RTSpecialName = 4096,
        HasSecurity = 16384,
        RequireSecObject = 32768
    }
}
declare module pe.managed.metadata {
    enum MethodImplAttributes {
        CodeTypeMask = 3,
        IL = 0,
        Native = 1,
        OPTIL = 2,
        Runtime = 3,
        ManagedMask = 4,
        Unmanaged = 4,
        Managed = 0,
        ForwardRef = 16,
        PreserveSig = 128,
        InternalCall = 4096,
        Synchronized = 32,
        NoInlining = 8,
        MaxMethodImplVal = 65535,
        NoOptimization = 64
    }
}
declare module pe.managed.metadata {
    enum MethodSemanticsAttributes {
        Setter = 1,
        Getter = 2,
        Other = 4,
        AddOn = 8,
        RemoveOn = 16,
        Fire = 32
    }
}
declare module pe.managed.metadata {
    enum PInvokeAttributes {
        NoMangle = 1,
        CharSetMask = 6,
        CharSetNotSpec = 0,
        CharSetAnsi = 2,
        CharSetUnicode = 4,
        CharSetAuto = 6,
        SupportsLastError = 64,
        CallConvMask = 1792,
        CallConvPlatformapi = 256,
        CallConvCdecl = 512,
        CallConvStdcall = 768,
        CallConvThiscall = 1024,
        CallConvFastcall = 1280
    }
}
declare module pe.managed.metadata {
    enum ParamAttributes {
        In = 1,
        Out = 2,
        Optional = 16,
        HasDefault = 4096,
        HasFieldMarshal = 8192,
        Unused = 53216
    }
}
declare module pe.managed.metadata {
    enum PropertyAttributes {
        SpecialName = 512,
        RTSpecialName = 1024,
        HasDefault = 4096,
        Unused = 59903
    }
}
declare module pe.managed.metadata {
    enum TypeAttributes {
        VisibilityMask = 7,
        NotPublic = 0,
        Public = 1,
        NestedPublic = 2,
        NestedPrivate = 3,
        NestedFamily = 4,
        NestedAssembly = 5,
        NestedFamANDAssem = 6,
        NestedFamORAssem = 7,
        LayoutMask = 24,
        AutoLayout = 0,
        SequentialLayout = 8,
        ExplicitLayout = 16,
        ClassSemanticsMask = 32,
        Class = 0,
        Interface = 32,
        Abstract = 128,
        Sealed = 256,
        SpecialName = 1024,
        Import = 4096,
        Serializable = 8192,
        StringFormatMask = 196608,
        AnsiClass = 0,
        UnicodeClass = 65536,
        AutoClass = 131072,
        CustomFormatClass = 196608,
        CustomStringFormatMask = 12582912,
        BeforeFieldInit = 1048576,
        RTSpecialName = 2048,
        HasSecurity = 262144,
        IsTypeForwarder = 2097152
    }
}
declare module pe.headers {
}
declare module pe.headers {
    class DosHeader {
        static intSize: number;
        mz: MZSignature;
        cblp: number;
        cp: number;
        crlc: number;
        cparhdr: number;
        minalloc: number;
        maxalloc: number;
        ss: number;
        sp: number;
        csum: number;
        ip: number;
        cs: number;
        lfarlc: number;
        ovno: number;
        res1: Long;
        oemid: number;
        oeminfo: number;
        reserved: number[];
        lfanew: number;
        toString(): string;
        read(reader: io.BufferReader): void;
    }
}
declare module pe.headers {
    class OptionalHeader {
        static intSize32: number;
        static intSize64: number;
        peMagic: PEMagic;
        linkerVersion: string;
        sizeOfCode: number;
        sizeOfInitializedData: number;
        sizeOfUninitializedData: number;
        addressOfEntryPoint: number;
        baseOfCode: number;
        baseOfData: number;
        imageBase: any;
        sectionAlignment: number;
        fileAlignment: number;
        operatingSystemVersion: string;
        imageVersion: string;
        subsystemVersion: string;
        win32VersionValue: number;
        sizeOfImage: number;
        sizeOfHeaders: number;
        checkSum: number;
        subsystem: Subsystem;
        dllCharacteristics: DllCharacteristics;
        sizeOfStackReserve: any;
        sizeOfStackCommit: any;
        sizeOfHeapReserve: any;
        sizeOfHeapCommit: any;
        loaderFlags: number;
        numberOfRvaAndSizes: number;
        dataDirectories: AddressRange[];
        toString(): string;
        read(reader: io.BufferReader): void;
    }
}
declare module pe.headers {
    class PEFileHeaders {
        dosHeader: DosHeader;
        dosStub: Uint8Array;
        peHeader: PEHeader;
        optionalHeader: OptionalHeader;
        sectionHeaders: SectionHeader[];
        toString(): string;
        read(reader: io.BufferReader, async?: AsyncCallback<PEFileHeaders>): void;
        private _continueRead;
    }
}
declare module pe.headers {
    class PEHeader {
        static intSize: number;
        pe: PESignature;
        machine: Machine;
        numberOfSections: number;
        timestamp: Date;
        pointerToSymbolTable: number;
        numberOfSymbols: number;
        sizeOfOptionalHeader: number;
        characteristics: ImageCharacteristics;
        toString(): string;
        read(reader: io.BufferReader): void;
    }
}
declare module pe.headers {
    class AddressRange {
        address?: number;
        size?: number;
        constructor(address?: number, size?: number);
        mapRelative(offset: number): number;
        toString(): string;
    }
    class AddressRangeMap extends AddressRange {
        virtualAddress?: number;
        constructor(address?: number, size?: number, virtualAddress?: number);
        toString(): string;
    }
    class SectionHeader extends AddressRangeMap {
        static intSize: number;
        name: string;
        virtualSize: number;
        pointerToRelocations: number;
        pointerToLinenumbers: number;
        numberOfRelocations: number;
        numberOfLinenumbers: number;
        entropy: number;
        characteristics: SectionCharacteristics;
        constructor();
        toString(): string;
        read(reader: io.BufferReader): void;
    }
}
declare module pe.io {
    class BufferReader {
        offset: number;
        sections: headers.AddressRangeMap[];
        private _currentSectionIndex;
        private _currentView;
        constructor(array: number[]);
        constructor(buffer: ArrayBuffer);
        constructor(view: DataView);
        readByte(): number;
        peekByte(): number;
        readShort(): number;
        readInt(): number;
        readLong(): Long;
        readBytes(length: number): Uint8Array;
        readBuffer(offset: number, length: number): Uint8Array;
        readZeroFilledAscii(length: number): string;
        readAsciiZ(maxLength?: number): string;
        readUtf8Z(maxLength: number): string;
        getVirtualOffset(): number;
        setVirtualOffset(rva: number): void;
        private _getView;
        private _tryMapToVirtual;
    }
    class ArrayReader extends BufferReader {
        private _array;
        offset: number;
        sections: headers.AddressRangeMap[];
        constructor(_array: number[]);
        readByte(): number;
        peekByte(): number;
        readShort(): number;
        readInt(): number;
        readLong(): Long;
        readBytes(length: number): Uint8Array;
        readZeroFilledAscii(length: number): string;
        readAsciiZ(maxLength?: number): string;
        readUtf8Z(maxLength: number): string;
        getVirtualOffset(): number;
        setVirtualOffset(rva: number): void;
        private _tryMapToVirtual2;
    }
    function getFileBufferReader(file: File, onsuccess: (BufferReader: any) => void, onfailure: (Error: any) => void): void;
    function getUrlBufferReader(url: string, onsuccess: (BufferReader: any) => void, onfailure: (Error: any) => void): void;
}
declare module pe.managed {
    class AppDomain {
        assemblies: Assembly[];
        mscorlib: Assembly;
        unresolvedAssemblies: Assembly[];
        constructor();
        read(reader: io.BufferReader, async?: AsyncCallback<Assembly>): Assembly;
        resolveAssembly(name: string, version: string, publicKeyToken: string, culture: string): Assembly;
    }
}
declare module pe.managed {
    class Assembly {
        isSpeculative: boolean;
        fileHeaders: headers.PEFileHeaders;
        name: string;
        version: string;
        publicKey: number[];
        publicKeyToken: string;
        culture: string;
        attributes: metadata.AssemblyFlags;
        runtimeVersion: string;
        specificRuntimeVersion: string;
        imageFlags: metadata.ClrImageFlags;
        metadataVersion: string;
        tableStreamVersion: string;
        generation: number;
        moduleName: string;
        mvid: string;
        encId: string;
        encBaseId: string;
        types: Type[];
        customAttributes: any[];
        toString(): string;
    }
}
declare module pe.managed {
    class EventInfo {
        owner: Type;
        name: string;
        eventType: Type;
        toString(): string;
    }
}
declare module pe.managed {
    class FieldInfo {
        attributes: metadata.FieldAttributes;
        name: string;
        fieldType: Type;
        fieldOffset: number;
        customAttributes: any[];
        toString(): string;
    }
}
declare module pe.managed {
    class MethodInfo {
        owner: Type;
        name: string;
        attributes: metadata.MethodAttributes;
        parameters: ParameterInfo[];
        customAttributes: any[];
        toString(): string;
    }
}
declare module pe.managed {
    class ParameterInfo {
        owner: MethodInfo;
        name: string;
        attributes: metadata.ParamAttributes;
        customAttributes: any[];
        parameterType: Type;
        toString(): string;
    }
}
declare module pe.managed {
    class PropertyInfo {
        owner: Type;
        name: string;
        propertyType: Type;
        attributes: metadata.PropertyAttributes;
        customAttributes: any[];
    }
}
declare module pe.managed {
    class Type {
        baseType?: Type;
        assembly?: Assembly;
        namespace?: string;
        name?: string;
        isSpeculative: boolean;
        attributes: metadata.TypeAttributes;
        fields: FieldInfo[];
        methods: MethodInfo[];
        properties: PropertyInfo[];
        events: EventInfo[];
        genericPrototype: Type;
        genericArguments: Type[];
        interfaces: Type[];
        netedTypes: Type[];
        nestingParent: Type;
        layout: {
            packingSize: number;
            classSize: number;
        };
        customAttributes: any[];
        constructor(baseType?: Type, assembly?: Assembly, namespace?: string, name?: string);
        getBaseType(): Type;
        getAssembly(): Assembly;
        getFullName(): string;
        toString(): string;
    }
}
declare module pe.managed.metadata {
    class ClrDirectory {
        private static _clrHeaderSize;
        cb: number;
        runtimeVersion: string;
        imageFlags: metadata.ClrImageFlags;
        metadataDir: headers.AddressRange;
        entryPointToken: number;
        resourcesDir: headers.AddressRange;
        strongNameSignatureDir: headers.AddressRange;
        codeManagerTableDir: headers.AddressRange;
        vtableFixupsDir: headers.AddressRange;
        exportAddressTableJumpsDir: headers.AddressRange;
        managedNativeHeaderDir: headers.AddressRange;
        read(readerAtClrDataDirectory: io.BufferReader): void;
    }
}
declare module pe.managed.metadata {
    class ClrMetadata {
        mdSignature: metadata.ClrMetadataSignature;
        metadataVersion: string;
        runtimeVersion: string;
        mdReserved: number;
        mdFlags: number;
        streamCount: number;
        read(clrDirReader: io.BufferReader): void;
    }
}
declare module pe.managed.metadata {
    class CodedIndexReader {
        tables: any[][];
        tableKinds: number[];
        tableKindBitCount: number;
        rowIndexBitCount: number;
        isShortForm: boolean;
        constructor(tables: any[][], tableKinds: number[]);
        readCodedIndex(reader: io.BufferReader): number;
        lookup(codedIndex: number): any;
    }
}
declare module pe.managed.metadata {
    class CodedIndexReaders {
        private _tables;
        resolutionScope: CodedIndexReader;
        typeDefOrRef: CodedIndexReader;
        hasConstant: CodedIndexReader;
        hasCustomAttribute: CodedIndexReader;
        customAttributeType: CodedIndexReader;
        hasDeclSecurity: CodedIndexReader;
        implementation: CodedIndexReader;
        hasFieldMarshal: CodedIndexReader;
        typeOrMethodDef: CodedIndexReader;
        memberForwarded: CodedIndexReader;
        memberRefParent: CodedIndexReader;
        methodDefOrRef: CodedIndexReader;
        hasSemantics: CodedIndexReader;
        constructor(_tables: any[][]);
    }
}
declare module pe.managed.metadata {
    class MetadataStreams {
        guids: string[];
        strings: headers.AddressRange;
        blobs: headers.AddressRange;
        tables: headers.AddressRange;
        read(metadataBaseAddress: number, streamCount: number, reader: io.BufferReader): void;
        private _readAlignedNameString;
        private _readGuidForStream;
    }
}
declare module pe.managed.metadata {
    class SignatureReader {
        private _tables;
        constructor(_tables: any[][]);
        readMethodDefSig(reader: io.BufferReader, def: managed.MethodInfo): void;
        readMethodRefSig(reader: io.BufferReader): void;
        readStandAloneMethodSig(reader: io.BufferReader, def: any): void;
        readFieldSig(reader: io.BufferReader, def: managed.FieldInfo): void;
        readPropertySig(reader: io.BufferReader, def: managed.PropertyInfo): void;
        readLocalVarSig(reader: io.BufferReader): void;
        readRefType(reader: io.BufferReader): Type;
        readConstraint(reader: io.BufferReader): any;
        readParam(reader: io.BufferReader): void;
        readCustomMod(reader: io.BufferReader): any;
        readType(reader: io.BufferReader): Type;
        private _readCompressed;
        private _readCompressedSigned;
    }
    module SignatureReader {
        enum CallingConvention {
            Default = 0,
            C = 1,
            StdCall = 2,
            ThisCall = 3,
            FastCall = 4,
            VarArg = 5,
            Field = 6,
            Property = 8,
            Local = 7,
            Generic = 16,
            HasThis = 32,
            ExplicitThis = 64,
            Sentinel = 65
        }
    }
}
declare module pe.managed.metadata {
    class TableCompletionReader {
        private _appDomain;
        private _tableStream;
        private _metadataStreams;
        private _codedIndexReaders;
        readPublicKey: (blobIndex: number) => number[];
        constructor(_appDomain: AppDomain, _tableStream: TableStream, _metadataStreams: MetadataStreams, _codedIndexReaders: CodedIndexReaders, readPublicKey: (blobIndex: number) => number[]);
        readString(index: number): string;
        readGuid(index: number): string;
        copyFieldRange(fields: FieldInfo[], start: number, end?: number, owner?: Type): void;
        copyMethodRange(methods: MethodInfo[], start: number, end?: number, owner?: Type): void;
        copyParamRange(parameters: ParameterInfo[], start: number, end: number, owner?: MethodInfo): void;
        private _copyDefRange;
        lookupTable(tableKind: TableKind, tableIndex: number): any;
        lookupResolutionScope(codedIndex: number): any;
        lookupTypeDefOrRef(codedIndex: number): Type;
        lookupHasConstant(codedIndex: number): any;
        lookupHasCustomAttribute(codedIndex: number): any;
        lookupCustomAttributeType(codedIndex: number): any;
        lookupHasDeclSecurity(codedIndex: number): any;
        lookupImplementation(codedIndex: number): any;
        lookupHasFieldMarshal(codedIndex: number): any;
        lookupTypeOrMethodDef(codedIndex: number): any;
        lookupMemberForwarded(codedIndex: number): any;
        lookupMemberRefParent(codedIndex: number): any;
        lookupMethodDefOrRef(codedIndex: number): any;
        lookupHasSemantics(codedIndex: number): any;
        resolveAssemblyRef(name: string, version: string, publicKeyOrToken: string, culture: string): managed.Assembly;
        resolveTypeRef(scope: any, namespace: string, name: string): managed.Type;
        readFieldSignature(field: FieldInfo, blobIndex: number): void;
    }
}
declare module pe.managed.metadata {
    enum TableKind {
        Module = 0,
        TypeRef = 1,
        TypeDef = 2,
        Field = 4,
        MethodDef = 6,
        Param = 8,
        MemberRef = 10,
        Constant = 11,
        CustomAttribute = 12,
        FieldMarshal = 13,
        DeclSecurity = 14,
        ClassLayout = 15,
        InterfaceImpl = 9,
        FieldLayout = 16,
        StandAloneSig = 17,
        EventMap = 18,
        Event = 20,
        PropertyMap = 21,
        Property = 23,
        MethodSemantics = 24,
        MethodImpl = 25,
        ModuleRef = 26,
        TypeSpec = 27,
        ImplMap = 28,
        FieldRVA = 29,
        Assembly = 32,
        AssemblyProcessor = 33,
        AssemblyOS = 34,
        AssemblyRef = 35,
        AssemblyRefProcessor = 36,
        AssemblyRefOS = 37,
        File = 38,
        ExportedType = 39,
        ManifestResource = 40,
        NestedClass = 41,
        GenericParam = 42,
        MethodSpec = 43,
        GenericParamConstraint = 44
    }
}
declare module pe.managed.metadata {
    class TableReader {
        private _reader;
        private _tables;
        private _codedIndexReaders;
        stringIndices: string[];
        constructor(_reader: io.BufferReader, _tables: any[][], stringCount: number, guidCount: number, blobCount: number, _codedIndexReaders: CodedIndexReaders);
        private readStringIndex;
        readString(): number;
        private _getDirectReader;
        private _getTableIndexReader;
        private _getCodedIndexReader;
        readByte(): number;
        readShort(): number;
        readInt(): number;
        readGuid: () => number;
        readResolutionScope(): number;
        readTypeDefOrRef(): number;
        readHasConstant(): number;
        readHasCustomAttribute(): number;
        readCustomAttributeType(): number;
        readHasDeclSecurity(): number;
        readImplementation(): number;
        readHasFieldMarshal(): number;
        readTypeOrMethodDef(): number;
        readMemberForwarded(): number;
        readMemberRefParent(): number;
        readMethodDefOrRef(): number;
        readHasSemantics(): number;
        readBlobIndex: () => number;
        readGenericParamTableIndex: () => number;
        readParamTableIndex: () => number;
        readFieldTableIndex: () => number;
        readMethodDefTableIndex: () => number;
        readTypeDefTableIndex: () => number;
        readEventTableIndex: () => number;
        readPropertyTableIndex: () => number;
        readModuleRefTableIndex: () => number;
        readAssemblyTableIndex: () => number;
    }
}
declare module pe.managed.metadata {
    class TableStream {
        reserved0: number;
        version: string;
        heapSizes: number;
        reserved1: number;
        tables: any[][];
        stringIndices: string[];
        codedIndexReaders: CodedIndexReaders;
        read(reader: io.BufferReader, stringCount: number, guidCount: number, blobCount: number): void;
        private _readTableRowCounts;
        private _populateTableObjects;
        private _populateTableRows;
        private _readTableRows;
    }
}
declare module pe.managed.metadata {
    function calcRequredBitCount(maxValue: any): number;
}
declare var jsSHA: any;
declare module pe.managed.tables {
    class Assembly {
        def: managed.Assembly;
        hashAlgId: metadata.AssemblyHashAlgorithm;
        majorVersion: number;
        minorVersion: number;
        buildNumber: number;
        revisionNumber: number;
        flags: metadata.AssemblyFlags;
        publicKey: number;
        name: number;
        culture: number;
        read(reader: metadata.TableReader): void;
        precomplete(reader: metadata.TableCompletionReader): void;
        private _hashPublicKey;
    }
}
declare module pe.managed.tables {
    class AssemblyOS {
        TableKind: number;
        osPlatformId: number;
        osMajorVersion: number;
        osMinorVersion: number;
        read(reader: metadata.TableReader): void;
    }
}
declare module pe.managed.tables {
    class AssemblyProcessor {
        TableKind: number;
        processor: number;
        reader(reader: metadata.TableReader): void;
    }
}
declare module pe.managed.tables {
    class AssemblyRef {
        def: managed.Assembly;
        majorVersion: number;
        minorVersion: number;
        buildNumber: number;
        revisionNumber: number;
        flags: metadata.AssemblyFlags;
        publicKeyOrToken: number;
        name: number;
        culture: number;
        hashValue: number;
        read(reader: metadata.TableReader): void;
        precomplete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class AssemblyRefOs {
        TableKind: number;
        osPlatformId: number;
        osMajorVersion: number;
        osMinorVersion: number;
        assemblyRef: number;
        read(reader: metadata.TableReader): void;
    }
}
declare module pe.managed.tables {
    class AssemblyRefProcessor {
        TableKind: number;
        processor: number;
        read(reader: metadata.TableReader): void;
    }
}
declare module pe.managed.tables {
    class ClassLayout {
        TableKind: number;
        packingSize: number;
        classSize: number;
        parent: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class Constant {
        TableKind: number;
        type: number;
        parent: number;
        value: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class CustomAttribute {
        TableKind: number;
        parent: number;
        type: number;
        value: number;
        read(reader: metadata.TableReader): void;
        static fire: boolean;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class DeclSecurity {
        action: number;
        parent: number;
        permissionSet: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class Event {
        def: EventInfo;
        eventFlags: metadata.EventAttributes;
        name: number;
        eventType: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class EventMap {
        parent: number;
        eventList: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class ExportedType {
        flags: metadata.TypeAttributes;
        typeDefId: number;
        typeName: number;
        typeNamespace: number;
        implementation: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class Field {
        def: FieldInfo;
        name: number;
        signature: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class FieldLayout {
        TableKind: number;
        offset: number;
        field: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class FieldMarshal {
        TableKind: number;
        parent: number;
        nativeType: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class FieldRVA {
        TableKind: number;
        rva: number;
        field: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class File {
        TableKind: number;
        flags: metadata.FileAttributes;
        name: number;
        hashValue: number;
        read(reader: metadata.TableReader): void;
    }
}
declare module pe.managed.tables {
    class GenericParam {
        TableKind: number;
        def: Type;
        number_: number;
        owner: number;
        name: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class GenericParamConstraint {
        owner: number;
        constraint: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class ImplMap {
        TableKind: number;
        mappingFlags: metadata.PInvokeAttributes;
        memberForwarded: number;
        importName: number;
        importScope: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class InterfaceImpl {
        class_: number;
        interface_: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class ManifestResource {
        offset: number;
        flags: metadata.ManifestResourceAttributes;
        name: number;
        implementation: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class MemberRef {
        TableKind: number;
        def: MethodInfo;
        class_: number;
        name: number;
        signature: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class MethodDef {
        def: MethodInfo;
        rva: number;
        implAttributes: metadata.MethodImplAttributes;
        attributes: metadata.MethodAttributes;
        name: number;
        signature: number;
        paramList: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader, nextMethodDef?: MethodDef): void;
    }
}
declare module pe.managed.tables {
    class MethodImpl {
        TableKind: number;
        class_: number;
        methodBody: number;
        methodDeclaration: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class MethodSemantics {
        TableKind: number;
        semantics: metadata.MethodSemanticsAttributes;
        method: number;
        association: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class MethodSpec {
        method: number;
        instantiation: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class Module {
        def: {
            generation: number;
            moduleName: string;
            mvid: string;
            encId: string;
            encBaseId: string;
        };
        name: number;
        mvid: number;
        encId: number;
        encBaseId: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class ModuleRef {
        name: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class NestedClass {
        nestedClass: number;
        enclosingClass: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class Param {
        def: ParameterInfo;
        sequence: number;
        name: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class Property {
        def: PropertyInfo;
        name: number;
        type: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class PropertyMap {
        parent: number;
        propertyList: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class StandAloneSig {
        signature: number;
        read(reader: metadata.TableReader): void;
    }
}
declare module pe.managed.tables {
    class TypeDef {
        def: Type;
        name: number;
        namespace: number;
        extends_: number;
        fieldList: number;
        methodList: number;
        constructor();
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader, nextTypeDef?: TypeDef): void;
    }
}
declare module pe.managed.tables {
    class TypeRef {
        def: Type;
        resolutionScope: number;
        name: number;
        namespace: number;
        read(reader: metadata.TableReader): void;
        precomplete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.managed.tables {
    class TypeSpec {
        def: Type;
        signature: number;
        read(reader: metadata.TableReader): void;
        complete(reader: metadata.TableCompletionReader): void;
    }
}
declare module pe.unmanaged {
    class DllExport {
        name: string;
        ordinal: number;
        exportRva: number;
        forwarder: string;
        static readExports(reader: io.BufferReader, range: headers.AddressRange): DllExports;
        private readExportEntry;
    }
}
declare module pe.unmanaged {
    interface DllExports {
        length: number;
        [i: number]: DllExport;
        flags: number;
        timestamp: Date;
        version: string;
        dllName: any;
        ordinalBase: any;
    }
}
declare module pe.unmanaged {
    class DllImport {
        name: string;
        ordinal: number;
        dllName: string;
        timeDateStamp: Date;
        static read(reader: io.BufferReader, result?: DllImport[]): DllImport[];
        private readEntry;
    }
}
declare module pe.unmanaged {
    class ResourceDataEntry {
        name: string;
        integerId: number;
        dataRva: number;
        size: number;
        codepage: number;
        reserved: number;
        toString(): string;
    }
}
declare module pe.unmanaged {
    class ResourceDirectory {
        characteristics: number;
        timestamp: Date;
        version: string;
        subdirectories: ResourceDirectoryEntry[];
        dataEntries: ResourceDataEntry[];
        toString(): string;
        read(reader: io.BufferReader): void;
        private readCore;
        readName(reader: io.BufferReader): string;
    }
}
declare module pe.unmanaged {
    class ResourceDirectoryEntry {
        name: string;
        integerId: number;
        directory: ResourceDirectory;
        toString(): string;
    }
}
