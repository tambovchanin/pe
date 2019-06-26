var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pe;
(function (pe) {
    var Long = (function () {
        function Long(lo, hi) {
            this.lo = lo;
            this.hi = hi;
        }
        Long.prototype.toString = function () {
            var result;
            result = this.lo.toString(16);
            if (this.hi != 0) {
                result = ('0000').substring(result.length) + result;
                result = this.hi.toString(16) + result;
            }
            result = result.toUpperCase() + 'h';
            return result;
        };
        return Long;
    }());
    pe.Long = Long;
})(pe || (pe = {}));
var pe;
(function (pe) {
    function formatEnum(value, type) {
        if (!value)
            if (value === null)
                return 'null';
            else if (typeof value == 'undefined')
                return 'undefined';
        var textValue = type[value];
        if (textValue)
            return textValue;
        var enumValues = [];
        var accountedEnumValueMask = 0;
        for (var kvKey in type) {
            var kvValue = type[kvKey];
            if (typeof kvValue !== 'number')
                continue;
            if (kvValue && (value & kvValue) === kvValue) {
                enumValues.push(kvKey);
                accountedEnumValueMask = accountedEnumValueMask | kvValue;
            }
        }
        var spill = value & ~accountedEnumValueMask;
        if (spill)
            enumValues.push('0x' + spill.toString(16).toUpperCase());
        textValue = enumValues.join(' | ');
        return textValue;
    }
    pe.formatEnum = formatEnum;
    function bytesToHex(bytes) {
        if (!bytes)
            return null;
        var result = '';
        for (var i = 0; i < bytes.length; i++) {
            var hex = bytes[i].toString(16).toUpperCase();
            if (hex.length == 1)
                hex = '0' + hex;
            result += hex;
        }
        return result;
    }
    pe.bytesToHex = bytesToHex;
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var DataDirectoryKind;
        (function (DataDirectoryKind) {
            DataDirectoryKind[DataDirectoryKind["ExportSymbols"] = 0] = "ExportSymbols";
            DataDirectoryKind[DataDirectoryKind["ImportSymbols"] = 1] = "ImportSymbols";
            DataDirectoryKind[DataDirectoryKind["Resources"] = 2] = "Resources";
            DataDirectoryKind[DataDirectoryKind["Exception"] = 3] = "Exception";
            DataDirectoryKind[DataDirectoryKind["Security"] = 4] = "Security";
            DataDirectoryKind[DataDirectoryKind["BaseRelocation"] = 5] = "BaseRelocation";
            DataDirectoryKind[DataDirectoryKind["Debug"] = 6] = "Debug";
            DataDirectoryKind[DataDirectoryKind["CopyrightString"] = 7] = "CopyrightString";
            DataDirectoryKind[DataDirectoryKind["Unknown"] = 8] = "Unknown";
            DataDirectoryKind[DataDirectoryKind["ThreadLocalStorage"] = 9] = "ThreadLocalStorage";
            DataDirectoryKind[DataDirectoryKind["LoadConfiguration"] = 10] = "LoadConfiguration";
            DataDirectoryKind[DataDirectoryKind["BoundImport"] = 11] = "BoundImport";
            DataDirectoryKind[DataDirectoryKind["ImportAddressTable"] = 12] = "ImportAddressTable";
            DataDirectoryKind[DataDirectoryKind["DelayImport"] = 13] = "DelayImport";
            DataDirectoryKind[DataDirectoryKind["Clr"] = 14] = "Clr";
        })(DataDirectoryKind = headers.DataDirectoryKind || (headers.DataDirectoryKind = {}));
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var DllCharacteristics;
        (function (DllCharacteristics) {
            DllCharacteristics[DllCharacteristics["ProcessInit"] = 1] = "ProcessInit";
            DllCharacteristics[DllCharacteristics["ProcessTerm"] = 2] = "ProcessTerm";
            DllCharacteristics[DllCharacteristics["ThreadInit"] = 4] = "ThreadInit";
            DllCharacteristics[DllCharacteristics["ThreadTerm"] = 8] = "ThreadTerm";
            DllCharacteristics[DllCharacteristics["DynamicBase"] = 64] = "DynamicBase";
            DllCharacteristics[DllCharacteristics["ForceIntegrity"] = 128] = "ForceIntegrity";
            DllCharacteristics[DllCharacteristics["NxCompatible"] = 256] = "NxCompatible";
            DllCharacteristics[DllCharacteristics["NoIsolation"] = 512] = "NoIsolation";
            DllCharacteristics[DllCharacteristics["NoSEH"] = 1024] = "NoSEH";
            DllCharacteristics[DllCharacteristics["NoBind"] = 2048] = "NoBind";
            DllCharacteristics[DllCharacteristics["AppContainer"] = 4096] = "AppContainer";
            DllCharacteristics[DllCharacteristics["WdmDriver"] = 8192] = "WdmDriver";
            DllCharacteristics[DllCharacteristics["Reserved"] = 16384] = "Reserved";
            DllCharacteristics[DllCharacteristics["TerminalServerAware"] = 32768] = "TerminalServerAware";
        })(DllCharacteristics = headers.DllCharacteristics || (headers.DllCharacteristics = {}));
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var ImageCharacteristics;
        (function (ImageCharacteristics) {
            ImageCharacteristics[ImageCharacteristics["RelocsStripped"] = 1] = "RelocsStripped";
            ImageCharacteristics[ImageCharacteristics["ExecutableImage"] = 2] = "ExecutableImage";
            ImageCharacteristics[ImageCharacteristics["LineNumsStripped"] = 4] = "LineNumsStripped";
            ImageCharacteristics[ImageCharacteristics["LocalSymsStripped"] = 8] = "LocalSymsStripped";
            ImageCharacteristics[ImageCharacteristics["AggressiveWsTrim"] = 16] = "AggressiveWsTrim";
            ImageCharacteristics[ImageCharacteristics["LargeAddressAware"] = 32] = "LargeAddressAware";
            ImageCharacteristics[ImageCharacteristics["BytesReversedLo"] = 128] = "BytesReversedLo";
            ImageCharacteristics[ImageCharacteristics["Bit32Machine"] = 256] = "Bit32Machine";
            ImageCharacteristics[ImageCharacteristics["DebugStripped"] = 512] = "DebugStripped";
            ImageCharacteristics[ImageCharacteristics["RemovableRunFromSwap"] = 1024] = "RemovableRunFromSwap";
            ImageCharacteristics[ImageCharacteristics["NetRunFromSwap"] = 2048] = "NetRunFromSwap";
            ImageCharacteristics[ImageCharacteristics["System"] = 4096] = "System";
            ImageCharacteristics[ImageCharacteristics["Dll"] = 8192] = "Dll";
            ImageCharacteristics[ImageCharacteristics["UpSystemOnly"] = 16384] = "UpSystemOnly";
            ImageCharacteristics[ImageCharacteristics["BytesReversedHi"] = 32768] = "BytesReversedHi";
        })(ImageCharacteristics = headers.ImageCharacteristics || (headers.ImageCharacteristics = {}));
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var MZSignature;
        (function (MZSignature) {
            MZSignature[MZSignature["MZ"] = "M".charCodeAt(0) +
                ("Z".charCodeAt(0) << 8)] = "MZ";
        })(MZSignature = headers.MZSignature || (headers.MZSignature = {}));
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var Machine;
        (function (Machine) {
            Machine[Machine["Unknown"] = 0] = "Unknown";
            Machine[Machine["I386"] = 332] = "I386";
            Machine[Machine["R3000"] = 354] = "R3000";
            Machine[Machine["R4000"] = 358] = "R4000";
            Machine[Machine["R10000"] = 360] = "R10000";
            Machine[Machine["WCEMIPSV2"] = 361] = "WCEMIPSV2";
            Machine[Machine["Alpha"] = 388] = "Alpha";
            Machine[Machine["SH3"] = 418] = "SH3";
            Machine[Machine["SH3DSP"] = 419] = "SH3DSP";
            Machine[Machine["SH3E"] = 420] = "SH3E";
            Machine[Machine["SH4"] = 422] = "SH4";
            Machine[Machine["SH5"] = 424] = "SH5";
            Machine[Machine["ARM"] = 448] = "ARM";
            Machine[Machine["Thumb"] = 450] = "Thumb";
            Machine[Machine["AM33"] = 467] = "AM33";
            Machine[Machine["PowerPC"] = 496] = "PowerPC";
            Machine[Machine["PowerPCFP"] = 497] = "PowerPCFP";
            Machine[Machine["IA64"] = 512] = "IA64";
            Machine[Machine["MIPS16"] = 614] = "MIPS16";
            Machine[Machine["Alpha64"] = 644] = "Alpha64";
            Machine[Machine["MIPSFPU"] = 870] = "MIPSFPU";
            Machine[Machine["MIPSFPU16"] = 1126] = "MIPSFPU16";
            Machine[Machine["AXP64"] = 644] = "AXP64";
            Machine[Machine["Tricore"] = 1312] = "Tricore";
            Machine[Machine["CEF"] = 3311] = "CEF";
            Machine[Machine["EBC"] = 3772] = "EBC";
            Machine[Machine["AMD64"] = 34404] = "AMD64";
            Machine[Machine["M32R"] = 36929] = "M32R";
            Machine[Machine["CEE"] = 49390] = "CEE";
        })(Machine = headers.Machine || (headers.Machine = {}));
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var PEMagic;
        (function (PEMagic) {
            PEMagic[PEMagic["NT32"] = 267] = "NT32";
            PEMagic[PEMagic["NT64"] = 523] = "NT64";
            PEMagic[PEMagic["ROM"] = 263] = "ROM";
        })(PEMagic = headers.PEMagic || (headers.PEMagic = {}));
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var PESignature;
        (function (PESignature) {
            PESignature[PESignature["PE"] = "P".charCodeAt(0) +
                ("E".charCodeAt(0) << 8)] = "PE";
        })(PESignature = headers.PESignature || (headers.PESignature = {}));
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var SectionCharacteristics;
        (function (SectionCharacteristics) {
            SectionCharacteristics[SectionCharacteristics["Reserved_0h"] = 0] = "Reserved_0h";
            SectionCharacteristics[SectionCharacteristics["Reserved_1h"] = 1] = "Reserved_1h";
            SectionCharacteristics[SectionCharacteristics["Reserved_2h"] = 2] = "Reserved_2h";
            SectionCharacteristics[SectionCharacteristics["Reserved_4h"] = 4] = "Reserved_4h";
            SectionCharacteristics[SectionCharacteristics["NoPadding"] = 8] = "NoPadding";
            SectionCharacteristics[SectionCharacteristics["Reserved_10h"] = 16] = "Reserved_10h";
            SectionCharacteristics[SectionCharacteristics["ContainsCode"] = 32] = "ContainsCode";
            SectionCharacteristics[SectionCharacteristics["ContainsInitializedData"] = 64] = "ContainsInitializedData";
            SectionCharacteristics[SectionCharacteristics["ContainsUninitializedData"] = 128] = "ContainsUninitializedData";
            SectionCharacteristics[SectionCharacteristics["LinkerOther"] = 256] = "LinkerOther";
            SectionCharacteristics[SectionCharacteristics["LinkerInfo"] = 512] = "LinkerInfo";
            SectionCharacteristics[SectionCharacteristics["Reserved_400h"] = 1024] = "Reserved_400h";
            SectionCharacteristics[SectionCharacteristics["LinkerRemove"] = 2048] = "LinkerRemove";
            SectionCharacteristics[SectionCharacteristics["LinkerCOMDAT"] = 4096] = "LinkerCOMDAT";
            SectionCharacteristics[SectionCharacteristics["Reserved_2000h"] = 8192] = "Reserved_2000h";
            SectionCharacteristics[SectionCharacteristics["NoDeferredSpeculativeExecution"] = 16384] = "NoDeferredSpeculativeExecution";
            SectionCharacteristics[SectionCharacteristics["GlobalPointerRelative"] = 32768] = "GlobalPointerRelative";
            SectionCharacteristics[SectionCharacteristics["Reserved_10000h"] = 65536] = "Reserved_10000h";
            SectionCharacteristics[SectionCharacteristics["MemoryPurgeable"] = 131072] = "MemoryPurgeable";
            SectionCharacteristics[SectionCharacteristics["MemoryLocked"] = 262144] = "MemoryLocked";
            SectionCharacteristics[SectionCharacteristics["MemoryPreload"] = 524288] = "MemoryPreload";
            SectionCharacteristics[SectionCharacteristics["Align1Bytes"] = 1048576] = "Align1Bytes";
            SectionCharacteristics[SectionCharacteristics["Align2Bytes"] = 2097152] = "Align2Bytes";
            SectionCharacteristics[SectionCharacteristics["Align4Bytes"] = 3145728] = "Align4Bytes";
            SectionCharacteristics[SectionCharacteristics["Align8Bytes"] = 4194304] = "Align8Bytes";
            SectionCharacteristics[SectionCharacteristics["Align16Bytes"] = 5242880] = "Align16Bytes";
            SectionCharacteristics[SectionCharacteristics["Align32Bytes"] = 6291456] = "Align32Bytes";
            SectionCharacteristics[SectionCharacteristics["Align64Bytes"] = 7340032] = "Align64Bytes";
            SectionCharacteristics[SectionCharacteristics["Align128Bytes"] = 8388608] = "Align128Bytes";
            SectionCharacteristics[SectionCharacteristics["Align256Bytes"] = 9437184] = "Align256Bytes";
            SectionCharacteristics[SectionCharacteristics["Align512Bytes"] = 10485760] = "Align512Bytes";
            SectionCharacteristics[SectionCharacteristics["Align1024Bytes"] = 11534336] = "Align1024Bytes";
            SectionCharacteristics[SectionCharacteristics["Align2048Bytes"] = 12582912] = "Align2048Bytes";
            SectionCharacteristics[SectionCharacteristics["Align4096Bytes"] = 13631488] = "Align4096Bytes";
            SectionCharacteristics[SectionCharacteristics["Align8192Bytes"] = 14680064] = "Align8192Bytes";
            SectionCharacteristics[SectionCharacteristics["LinkerRelocationOverflow"] = 16777216] = "LinkerRelocationOverflow";
            SectionCharacteristics[SectionCharacteristics["MemoryDiscardable"] = 33554432] = "MemoryDiscardable";
            SectionCharacteristics[SectionCharacteristics["MemoryNotCached"] = 67108864] = "MemoryNotCached";
            SectionCharacteristics[SectionCharacteristics["MemoryNotPaged"] = 134217728] = "MemoryNotPaged";
            SectionCharacteristics[SectionCharacteristics["MemoryShared"] = 268435456] = "MemoryShared";
            SectionCharacteristics[SectionCharacteristics["MemoryExecute"] = 536870912] = "MemoryExecute";
            SectionCharacteristics[SectionCharacteristics["MemoryRead"] = 1073741824] = "MemoryRead";
            SectionCharacteristics[SectionCharacteristics["MemoryWrite"] = 2147483648] = "MemoryWrite";
        })(SectionCharacteristics = headers.SectionCharacteristics || (headers.SectionCharacteristics = {}));
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var Subsystem;
        (function (Subsystem) {
            Subsystem[Subsystem["Unknown"] = 0] = "Unknown";
            Subsystem[Subsystem["Native"] = 1] = "Native";
            Subsystem[Subsystem["WindowsGUI"] = 2] = "WindowsGUI";
            Subsystem[Subsystem["WindowsCUI"] = 3] = "WindowsCUI";
            Subsystem[Subsystem["OS2CUI"] = 5] = "OS2CUI";
            Subsystem[Subsystem["POSIXCUI"] = 7] = "POSIXCUI";
            Subsystem[Subsystem["NativeWindows"] = 8] = "NativeWindows";
            Subsystem[Subsystem["WindowsCEGUI"] = 9] = "WindowsCEGUI";
            Subsystem[Subsystem["EFIApplication"] = 10] = "EFIApplication";
            Subsystem[Subsystem["EFIBootServiceDriver"] = 11] = "EFIBootServiceDriver";
            Subsystem[Subsystem["EFIRuntimeDriver"] = 12] = "EFIRuntimeDriver";
            Subsystem[Subsystem["EFIROM"] = 13] = "EFIROM";
            Subsystem[Subsystem["XBOX"] = 14] = "XBOX";
            Subsystem[Subsystem["BootApplication"] = 16] = "BootApplication";
        })(Subsystem = headers.Subsystem || (headers.Subsystem = {}));
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var AssemblyFlags;
            (function (AssemblyFlags) {
                AssemblyFlags[AssemblyFlags["PublicKey"] = 1] = "PublicKey";
                AssemblyFlags[AssemblyFlags["Retargetable"] = 256] = "Retargetable";
                AssemblyFlags[AssemblyFlags["DisableJITcompileOptimizer"] = 16384] = "DisableJITcompileOptimizer";
                AssemblyFlags[AssemblyFlags["EnableJITcompileTracking"] = 32768] = "EnableJITcompileTracking";
            })(AssemblyFlags = metadata.AssemblyFlags || (metadata.AssemblyFlags = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var AssemblyHashAlgorithm;
            (function (AssemblyHashAlgorithm) {
                AssemblyHashAlgorithm[AssemblyHashAlgorithm["None"] = 0] = "None";
                AssemblyHashAlgorithm[AssemblyHashAlgorithm["MD5"] = 32771] = "MD5";
                AssemblyHashAlgorithm[AssemblyHashAlgorithm["SHA1"] = 32772] = "SHA1";
                AssemblyHashAlgorithm[AssemblyHashAlgorithm["SHA256"] = 32780] = "SHA256";
                AssemblyHashAlgorithm[AssemblyHashAlgorithm["SHA384"] = 32781] = "SHA384";
                AssemblyHashAlgorithm[AssemblyHashAlgorithm["SHA512"] = 32782] = "SHA512";
            })(AssemblyHashAlgorithm = metadata.AssemblyHashAlgorithm || (metadata.AssemblyHashAlgorithm = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var CallingConventions;
            (function (CallingConventions) {
                CallingConventions[CallingConventions["Default"] = 0] = "Default";
                CallingConventions[CallingConventions["C"] = 1] = "C";
                CallingConventions[CallingConventions["StdCall"] = 2] = "StdCall";
                CallingConventions[CallingConventions["FastCall"] = 4] = "FastCall";
                CallingConventions[CallingConventions["VarArg"] = 5] = "VarArg";
                CallingConventions[CallingConventions["Generic"] = 16] = "Generic";
                CallingConventions[CallingConventions["HasThis"] = 32] = "HasThis";
                CallingConventions[CallingConventions["ExplicitThis"] = 64] = "ExplicitThis";
                CallingConventions[CallingConventions["Sentinel"] = 65] = "Sentinel";
            })(CallingConventions = metadata.CallingConventions || (metadata.CallingConventions = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var ClrImageFlags;
            (function (ClrImageFlags) {
                ClrImageFlags[ClrImageFlags["ILOnly"] = 1] = "ILOnly";
                ClrImageFlags[ClrImageFlags["_32BitRequired"] = 2] = "_32BitRequired";
                ClrImageFlags[ClrImageFlags["ILLibrary"] = 4] = "ILLibrary";
                ClrImageFlags[ClrImageFlags["StrongNameSigned"] = 8] = "StrongNameSigned";
                ClrImageFlags[ClrImageFlags["NativeEntryPoint"] = 16] = "NativeEntryPoint";
                ClrImageFlags[ClrImageFlags["TrackDebugData"] = 65536] = "TrackDebugData";
                ClrImageFlags[ClrImageFlags["IsIbcoptimized"] = 131072] = "IsIbcoptimized";
            })(ClrImageFlags = metadata.ClrImageFlags || (metadata.ClrImageFlags = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var ClrMetadataSignature;
            (function (ClrMetadataSignature) {
                ClrMetadataSignature[ClrMetadataSignature["Signature"] = 1112167234] = "Signature";
            })(ClrMetadataSignature = metadata.ClrMetadataSignature || (metadata.ClrMetadataSignature = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var ElementType;
            (function (ElementType) {
                ElementType[ElementType["End"] = 0] = "End";
                ElementType[ElementType["Void"] = 1] = "Void";
                ElementType[ElementType["Boolean"] = 2] = "Boolean";
                ElementType[ElementType["Char"] = 3] = "Char";
                ElementType[ElementType["I1"] = 4] = "I1";
                ElementType[ElementType["U1"] = 5] = "U1";
                ElementType[ElementType["I2"] = 6] = "I2";
                ElementType[ElementType["U2"] = 7] = "U2";
                ElementType[ElementType["I4"] = 8] = "I4";
                ElementType[ElementType["U4"] = 9] = "U4";
                ElementType[ElementType["I8"] = 10] = "I8";
                ElementType[ElementType["U8"] = 11] = "U8";
                ElementType[ElementType["R4"] = 12] = "R4";
                ElementType[ElementType["R8"] = 13] = "R8";
                ElementType[ElementType["String"] = 14] = "String";
                ElementType[ElementType["Ptr"] = 15] = "Ptr";
                ElementType[ElementType["ByRef"] = 16] = "ByRef";
                ElementType[ElementType["ValueType"] = 17] = "ValueType";
                ElementType[ElementType["Class"] = 18] = "Class";
                ElementType[ElementType["Var"] = 19] = "Var";
                ElementType[ElementType["Array"] = 20] = "Array";
                ElementType[ElementType["GenericInst"] = 21] = "GenericInst";
                ElementType[ElementType["TypedByRef"] = 22] = "TypedByRef";
                ElementType[ElementType["I"] = 24] = "I";
                ElementType[ElementType["U"] = 25] = "U";
                ElementType[ElementType["FnPtr"] = 27] = "FnPtr";
                ElementType[ElementType["Object"] = 28] = "Object";
                ElementType[ElementType["SZArray"] = 29] = "SZArray";
                ElementType[ElementType["MVar"] = 30] = "MVar";
                ElementType[ElementType["CMod_ReqD"] = 31] = "CMod_ReqD";
                ElementType[ElementType["CMod_Opt"] = 32] = "CMod_Opt";
                ElementType[ElementType["Internal"] = 33] = "Internal";
                ElementType[ElementType["Modifier"] = 64] = "Modifier";
                ElementType[ElementType["Sentinel"] = 65] = "Sentinel";
                ElementType[ElementType["Pinned"] = 69] = "Pinned";
                ElementType[ElementType["R4_Hfa"] = 70] = "R4_Hfa";
                ElementType[ElementType["R8_Hfa"] = 71] = "R8_Hfa";
                ElementType[ElementType["ArgumentType_"] = 80] = "ArgumentType_";
                ElementType[ElementType["CustomAttribute_BoxedObject_"] = 81] = "CustomAttribute_BoxedObject_";
                ElementType[ElementType["CustomAttribute_Field_"] = 83] = "CustomAttribute_Field_";
                ElementType[ElementType["CustomAttribute_Property_"] = 84] = "CustomAttribute_Property_";
                ElementType[ElementType["CustomAttribute_Enum_"] = 85] = "CustomAttribute_Enum_";
            })(ElementType = metadata.ElementType || (metadata.ElementType = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var EventAttributes;
            (function (EventAttributes) {
                EventAttributes[EventAttributes["SpecialName"] = 512] = "SpecialName";
                EventAttributes[EventAttributes["RTSpecialName"] = 1024] = "RTSpecialName";
            })(EventAttributes = metadata.EventAttributes || (metadata.EventAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var FieldAttributes;
            (function (FieldAttributes) {
                FieldAttributes[FieldAttributes["FieldAccessMask"] = 7] = "FieldAccessMask";
                FieldAttributes[FieldAttributes["CompilerControlled"] = 0] = "CompilerControlled";
                FieldAttributes[FieldAttributes["Private"] = 1] = "Private";
                FieldAttributes[FieldAttributes["FamANDAssem"] = 2] = "FamANDAssem";
                FieldAttributes[FieldAttributes["Assembly"] = 3] = "Assembly";
                FieldAttributes[FieldAttributes["Family"] = 4] = "Family";
                FieldAttributes[FieldAttributes["FamORAssem"] = 5] = "FamORAssem";
                FieldAttributes[FieldAttributes["Public"] = 6] = "Public";
                FieldAttributes[FieldAttributes["Static"] = 16] = "Static";
                FieldAttributes[FieldAttributes["InitOnly"] = 32] = "InitOnly";
                FieldAttributes[FieldAttributes["Literal"] = 64] = "Literal";
                FieldAttributes[FieldAttributes["NotSerialized"] = 128] = "NotSerialized";
                FieldAttributes[FieldAttributes["SpecialName"] = 512] = "SpecialName";
                FieldAttributes[FieldAttributes["PInvokeImpl"] = 8192] = "PInvokeImpl";
                FieldAttributes[FieldAttributes["RTSpecialName"] = 1024] = "RTSpecialName";
                FieldAttributes[FieldAttributes["HasFieldMarshal"] = 4096] = "HasFieldMarshal";
                FieldAttributes[FieldAttributes["HasDefault"] = 32768] = "HasDefault";
                FieldAttributes[FieldAttributes["HasFieldRVA"] = 256] = "HasFieldRVA";
            })(FieldAttributes = metadata.FieldAttributes || (metadata.FieldAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var FileAttributes;
            (function (FileAttributes) {
                FileAttributes[FileAttributes["ContainsMetaData"] = 0] = "ContainsMetaData";
                FileAttributes[FileAttributes["ContainsNoMetaData"] = 1] = "ContainsNoMetaData";
            })(FileAttributes = metadata.FileAttributes || (metadata.FileAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var ManifestResourceAttributes;
            (function (ManifestResourceAttributes) {
                ManifestResourceAttributes[ManifestResourceAttributes["VisibilityMask"] = 7] = "VisibilityMask";
                ManifestResourceAttributes[ManifestResourceAttributes["Public"] = 1] = "Public";
                ManifestResourceAttributes[ManifestResourceAttributes["Private"] = 2] = "Private";
            })(ManifestResourceAttributes = metadata.ManifestResourceAttributes || (metadata.ManifestResourceAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var MethodAttributes;
            (function (MethodAttributes) {
                MethodAttributes[MethodAttributes["MemberAccessMask"] = 7] = "MemberAccessMask";
                MethodAttributes[MethodAttributes["CompilerControlled"] = 0] = "CompilerControlled";
                MethodAttributes[MethodAttributes["Private"] = 1] = "Private";
                MethodAttributes[MethodAttributes["FamANDAssem"] = 2] = "FamANDAssem";
                MethodAttributes[MethodAttributes["Assem"] = 3] = "Assem";
                MethodAttributes[MethodAttributes["Family"] = 4] = "Family";
                MethodAttributes[MethodAttributes["FamORAssem"] = 5] = "FamORAssem";
                MethodAttributes[MethodAttributes["Public"] = 6] = "Public";
                MethodAttributes[MethodAttributes["Static"] = 16] = "Static";
                MethodAttributes[MethodAttributes["Final"] = 32] = "Final";
                MethodAttributes[MethodAttributes["Virtual"] = 64] = "Virtual";
                MethodAttributes[MethodAttributes["HideBySig"] = 128] = "HideBySig";
                MethodAttributes[MethodAttributes["VtableLayoutMask"] = 256] = "VtableLayoutMask";
                MethodAttributes[MethodAttributes["ReuseSlot"] = 0] = "ReuseSlot";
                MethodAttributes[MethodAttributes["NewSlot"] = 256] = "NewSlot";
                MethodAttributes[MethodAttributes["Strict"] = 512] = "Strict";
                MethodAttributes[MethodAttributes["Abstract"] = 1024] = "Abstract";
                MethodAttributes[MethodAttributes["SpecialName"] = 2048] = "SpecialName";
                MethodAttributes[MethodAttributes["PInvokeImpl"] = 8192] = "PInvokeImpl";
                MethodAttributes[MethodAttributes["UnmanagedExport"] = 8] = "UnmanagedExport";
                MethodAttributes[MethodAttributes["RTSpecialName"] = 4096] = "RTSpecialName";
                MethodAttributes[MethodAttributes["HasSecurity"] = 16384] = "HasSecurity";
                MethodAttributes[MethodAttributes["RequireSecObject"] = 32768] = "RequireSecObject";
            })(MethodAttributes = metadata.MethodAttributes || (metadata.MethodAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var MethodImplAttributes;
            (function (MethodImplAttributes) {
                MethodImplAttributes[MethodImplAttributes["CodeTypeMask"] = 3] = "CodeTypeMask";
                MethodImplAttributes[MethodImplAttributes["IL"] = 0] = "IL";
                MethodImplAttributes[MethodImplAttributes["Native"] = 1] = "Native";
                MethodImplAttributes[MethodImplAttributes["OPTIL"] = 2] = "OPTIL";
                MethodImplAttributes[MethodImplAttributes["Runtime"] = 3] = "Runtime";
                MethodImplAttributes[MethodImplAttributes["ManagedMask"] = 4] = "ManagedMask";
                MethodImplAttributes[MethodImplAttributes["Unmanaged"] = 4] = "Unmanaged";
                MethodImplAttributes[MethodImplAttributes["Managed"] = 0] = "Managed";
                MethodImplAttributes[MethodImplAttributes["ForwardRef"] = 16] = "ForwardRef";
                MethodImplAttributes[MethodImplAttributes["PreserveSig"] = 128] = "PreserveSig";
                MethodImplAttributes[MethodImplAttributes["InternalCall"] = 4096] = "InternalCall";
                MethodImplAttributes[MethodImplAttributes["Synchronized"] = 32] = "Synchronized";
                MethodImplAttributes[MethodImplAttributes["NoInlining"] = 8] = "NoInlining";
                MethodImplAttributes[MethodImplAttributes["MaxMethodImplVal"] = 65535] = "MaxMethodImplVal";
                MethodImplAttributes[MethodImplAttributes["NoOptimization"] = 64] = "NoOptimization";
            })(MethodImplAttributes = metadata.MethodImplAttributes || (metadata.MethodImplAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var MethodSemanticsAttributes;
            (function (MethodSemanticsAttributes) {
                MethodSemanticsAttributes[MethodSemanticsAttributes["Setter"] = 1] = "Setter";
                MethodSemanticsAttributes[MethodSemanticsAttributes["Getter"] = 2] = "Getter";
                MethodSemanticsAttributes[MethodSemanticsAttributes["Other"] = 4] = "Other";
                MethodSemanticsAttributes[MethodSemanticsAttributes["AddOn"] = 8] = "AddOn";
                MethodSemanticsAttributes[MethodSemanticsAttributes["RemoveOn"] = 16] = "RemoveOn";
                MethodSemanticsAttributes[MethodSemanticsAttributes["Fire"] = 32] = "Fire";
            })(MethodSemanticsAttributes = metadata.MethodSemanticsAttributes || (metadata.MethodSemanticsAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var PInvokeAttributes;
            (function (PInvokeAttributes) {
                PInvokeAttributes[PInvokeAttributes["NoMangle"] = 1] = "NoMangle";
                PInvokeAttributes[PInvokeAttributes["CharSetMask"] = 6] = "CharSetMask";
                PInvokeAttributes[PInvokeAttributes["CharSetNotSpec"] = 0] = "CharSetNotSpec";
                PInvokeAttributes[PInvokeAttributes["CharSetAnsi"] = 2] = "CharSetAnsi";
                PInvokeAttributes[PInvokeAttributes["CharSetUnicode"] = 4] = "CharSetUnicode";
                PInvokeAttributes[PInvokeAttributes["CharSetAuto"] = 6] = "CharSetAuto";
                PInvokeAttributes[PInvokeAttributes["SupportsLastError"] = 64] = "SupportsLastError";
                PInvokeAttributes[PInvokeAttributes["CallConvMask"] = 1792] = "CallConvMask";
                PInvokeAttributes[PInvokeAttributes["CallConvPlatformapi"] = 256] = "CallConvPlatformapi";
                PInvokeAttributes[PInvokeAttributes["CallConvCdecl"] = 512] = "CallConvCdecl";
                PInvokeAttributes[PInvokeAttributes["CallConvStdcall"] = 768] = "CallConvStdcall";
                PInvokeAttributes[PInvokeAttributes["CallConvThiscall"] = 1024] = "CallConvThiscall";
                PInvokeAttributes[PInvokeAttributes["CallConvFastcall"] = 1280] = "CallConvFastcall";
            })(PInvokeAttributes = metadata.PInvokeAttributes || (metadata.PInvokeAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var ParamAttributes;
            (function (ParamAttributes) {
                ParamAttributes[ParamAttributes["In"] = 1] = "In";
                ParamAttributes[ParamAttributes["Out"] = 2] = "Out";
                ParamAttributes[ParamAttributes["Optional"] = 16] = "Optional";
                ParamAttributes[ParamAttributes["HasDefault"] = 4096] = "HasDefault";
                ParamAttributes[ParamAttributes["HasFieldMarshal"] = 8192] = "HasFieldMarshal";
                ParamAttributes[ParamAttributes["Unused"] = 53216] = "Unused";
            })(ParamAttributes = metadata.ParamAttributes || (metadata.ParamAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var PropertyAttributes;
            (function (PropertyAttributes) {
                PropertyAttributes[PropertyAttributes["SpecialName"] = 512] = "SpecialName";
                PropertyAttributes[PropertyAttributes["RTSpecialName"] = 1024] = "RTSpecialName";
                PropertyAttributes[PropertyAttributes["HasDefault"] = 4096] = "HasDefault";
                PropertyAttributes[PropertyAttributes["Unused"] = 59903] = "Unused";
            })(PropertyAttributes = metadata.PropertyAttributes || (metadata.PropertyAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var TypeAttributes;
            (function (TypeAttributes) {
                TypeAttributes[TypeAttributes["VisibilityMask"] = 7] = "VisibilityMask";
                TypeAttributes[TypeAttributes["NotPublic"] = 0] = "NotPublic";
                TypeAttributes[TypeAttributes["Public"] = 1] = "Public";
                TypeAttributes[TypeAttributes["NestedPublic"] = 2] = "NestedPublic";
                TypeAttributes[TypeAttributes["NestedPrivate"] = 3] = "NestedPrivate";
                TypeAttributes[TypeAttributes["NestedFamily"] = 4] = "NestedFamily";
                TypeAttributes[TypeAttributes["NestedAssembly"] = 5] = "NestedAssembly";
                TypeAttributes[TypeAttributes["NestedFamANDAssem"] = 6] = "NestedFamANDAssem";
                TypeAttributes[TypeAttributes["NestedFamORAssem"] = 7] = "NestedFamORAssem";
                TypeAttributes[TypeAttributes["LayoutMask"] = 24] = "LayoutMask";
                TypeAttributes[TypeAttributes["AutoLayout"] = 0] = "AutoLayout";
                TypeAttributes[TypeAttributes["SequentialLayout"] = 8] = "SequentialLayout";
                TypeAttributes[TypeAttributes["ExplicitLayout"] = 16] = "ExplicitLayout";
                TypeAttributes[TypeAttributes["ClassSemanticsMask"] = 32] = "ClassSemanticsMask";
                TypeAttributes[TypeAttributes["Class"] = 0] = "Class";
                TypeAttributes[TypeAttributes["Interface"] = 32] = "Interface";
                TypeAttributes[TypeAttributes["Abstract"] = 128] = "Abstract";
                TypeAttributes[TypeAttributes["Sealed"] = 256] = "Sealed";
                TypeAttributes[TypeAttributes["SpecialName"] = 1024] = "SpecialName";
                TypeAttributes[TypeAttributes["Import"] = 4096] = "Import";
                TypeAttributes[TypeAttributes["Serializable"] = 8192] = "Serializable";
                TypeAttributes[TypeAttributes["StringFormatMask"] = 196608] = "StringFormatMask";
                TypeAttributes[TypeAttributes["AnsiClass"] = 0] = "AnsiClass";
                TypeAttributes[TypeAttributes["UnicodeClass"] = 65536] = "UnicodeClass";
                TypeAttributes[TypeAttributes["AutoClass"] = 131072] = "AutoClass";
                TypeAttributes[TypeAttributes["CustomFormatClass"] = 196608] = "CustomFormatClass";
                TypeAttributes[TypeAttributes["CustomStringFormatMask"] = 12582912] = "CustomStringFormatMask";
                TypeAttributes[TypeAttributes["BeforeFieldInit"] = 1048576] = "BeforeFieldInit";
                TypeAttributes[TypeAttributes["RTSpecialName"] = 2048] = "RTSpecialName";
                TypeAttributes[TypeAttributes["HasSecurity"] = 262144] = "HasSecurity";
                TypeAttributes[TypeAttributes["IsTypeForwarder"] = 2097152] = "IsTypeForwarder";
            })(TypeAttributes = metadata.TypeAttributes || (metadata.TypeAttributes = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var DosHeader = (function () {
            function DosHeader() {
                this.mz = headers.MZSignature.MZ;
                this.cblp = 144;
                this.cp = 3;
                this.crlc = 0;
                this.cparhdr = 4;
                this.minalloc = 0;
                this.maxalloc = 65535;
                this.ss = 0;
                this.sp = 184;
                this.csum = 0;
                this.ip = 0;
                this.cs = 0;
                this.lfarlc = 64;
                this.ovno = 0;
                this.res1 = new pe.Long(0, 0);
                this.oemid = 0;
                this.oeminfo = 0;
                this.reserved = [0, 0, 0, 0, 0];
                this.lfanew = 0;
            }
            DosHeader.prototype.toString = function () {
                var result = "[" +
                    (this.mz === headers.MZSignature.MZ ? "MZ" :
                        typeof this.mz === "number" ? this.mz.toString(16).toUpperCase() + "h" :
                            typeof this.mz) + "]" +
                    ".lfanew=" +
                    (typeof this.lfanew === "number" ? this.lfanew.toString(16).toUpperCase() + "h" :
                        typeof this.lfanew);
                return result;
            };
            DosHeader.prototype.read = function (reader) {
                this.mz = reader.readShort();
                if (this.mz != headers.MZSignature.MZ)
                    throw new Error("MZ signature is invalid: " + (this.mz).toString(16).toUpperCase() + "h.");
                this.cblp = reader.readShort();
                this.cp = reader.readShort();
                this.crlc = reader.readShort();
                this.cparhdr = reader.readShort();
                this.minalloc = reader.readShort();
                this.maxalloc = reader.readShort();
                this.ss = reader.readShort();
                this.sp = reader.readShort();
                this.csum = reader.readShort();
                this.ip = reader.readShort();
                this.cs = reader.readShort();
                this.lfarlc = reader.readShort();
                this.ovno = reader.readShort();
                this.res1 = reader.readLong();
                this.oemid = reader.readShort();
                this.oeminfo = reader.readShort();
                if (!this.reserved)
                    this.reserved = [];
                for (var i = 0; i < 5; i++) {
                    this.reserved[i] = reader.readInt();
                }
                this.reserved.length = 5;
                this.lfanew = reader.readInt();
            };
            DosHeader.intSize = 16;
            return DosHeader;
        }());
        headers.DosHeader = DosHeader;
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var OptionalHeader = (function () {
            function OptionalHeader() {
                this.peMagic = headers.PEMagic.NT32;
                this.linkerVersion = "";
                this.sizeOfCode = 0;
                this.sizeOfInitializedData = 0;
                this.sizeOfUninitializedData = 0;
                this.addressOfEntryPoint = 0;
                this.baseOfCode = 0x2000;
                this.baseOfData = 0x4000;
                this.imageBase = 0x4000;
                this.sectionAlignment = 0x2000;
                this.fileAlignment = 0x200;
                this.operatingSystemVersion = "";
                this.imageVersion = "";
                this.subsystemVersion = "";
                this.win32VersionValue = 0;
                this.sizeOfImage = 0;
                this.sizeOfHeaders = 0;
                this.checkSum = 0;
                this.subsystem = headers.Subsystem.WindowsCUI;
                this.dllCharacteristics = headers.DllCharacteristics.NxCompatible;
                this.sizeOfStackReserve = 0x100000;
                this.sizeOfStackCommit = 0x1000;
                this.sizeOfHeapReserve = 0x100000;
                this.sizeOfHeapCommit = 0x1000;
                this.loaderFlags = 0;
                this.numberOfRvaAndSizes = 16;
                this.dataDirectories = [];
            }
            OptionalHeader.prototype.toString = function () {
                var result = [];
                var peMagicText = pe.formatEnum(this.peMagic, headers.PEMagic);
                if (peMagicText)
                    result.push(peMagicText);
                var subsystemText = pe.formatEnum(this.subsystem, headers.Subsystem);
                if (subsystemText)
                    result.push(subsystemText);
                var dllCharacteristicsText = pe.formatEnum(this.dllCharacteristics, headers.DllCharacteristics);
                if (dllCharacteristicsText)
                    result.push(dllCharacteristicsText);
                var nonzeroDataDirectoriesText = [];
                if (this.dataDirectories) {
                    for (var i = 0; i < this.dataDirectories.length; i++) {
                        if (!this.dataDirectories[i] || this.dataDirectories[i].size <= 0)
                            continue;
                        var kind = pe.formatEnum(i, headers.DataDirectoryKind);
                        nonzeroDataDirectoriesText.push(kind);
                    }
                }
                result.push("dataDirectories[" +
                    nonzeroDataDirectoriesText.join(",") + "]");
                var resultText = result.join(" ");
                return resultText;
            };
            OptionalHeader.prototype.read = function (reader) {
                this.peMagic = reader.readShort();
                if (this.peMagic != headers.PEMagic.NT32
                    && this.peMagic != headers.PEMagic.NT64)
                    throw Error("Unsupported PE magic value " + this.peMagic.toString(16).toUpperCase() + "h.");
                this.linkerVersion = reader.readByte() + "." + reader.readByte();
                this.sizeOfCode = reader.readInt();
                this.sizeOfInitializedData = reader.readInt();
                this.sizeOfUninitializedData = reader.readInt();
                this.addressOfEntryPoint = reader.readInt();
                this.baseOfCode = reader.readInt();
                if (this.peMagic == headers.PEMagic.NT32) {
                    this.baseOfData = reader.readInt();
                    this.imageBase = reader.readInt();
                }
                else {
                    this.imageBase = reader.readLong();
                }
                this.sectionAlignment = reader.readInt();
                this.fileAlignment = reader.readInt();
                this.operatingSystemVersion = reader.readShort() + "." + reader.readShort();
                this.imageVersion = reader.readShort() + "." + reader.readShort();
                this.subsystemVersion = reader.readShort() + "." + reader.readShort();
                this.win32VersionValue = reader.readInt();
                this.sizeOfImage = reader.readInt();
                this.sizeOfHeaders = reader.readInt();
                this.checkSum = reader.readInt();
                this.subsystem = reader.readShort();
                this.dllCharacteristics = reader.readShort();
                if (this.peMagic == headers.PEMagic.NT32) {
                    this.sizeOfStackReserve = reader.readInt();
                    this.sizeOfStackCommit = reader.readInt();
                    this.sizeOfHeapReserve = reader.readInt();
                    this.sizeOfHeapCommit = reader.readInt();
                }
                else {
                    this.sizeOfStackReserve = reader.readLong();
                    this.sizeOfStackCommit = reader.readLong();
                    this.sizeOfHeapReserve = reader.readLong();
                    this.sizeOfHeapCommit = reader.readLong();
                }
                this.loaderFlags = reader.readInt();
                this.numberOfRvaAndSizes = reader.readInt();
                if (this.dataDirectories == null
                    || this.dataDirectories.length != this.numberOfRvaAndSizes)
                    this.dataDirectories = (Array(this.numberOfRvaAndSizes));
                for (var i = 0; i < this.numberOfRvaAndSizes; i++) {
                    if (this.dataDirectories[i]) {
                        this.dataDirectories[i].address = reader.readInt();
                        this.dataDirectories[i].size = reader.readInt();
                    }
                    else {
                        this.dataDirectories[i] = new headers.AddressRange(reader.readInt(), reader.readInt());
                    }
                }
            };
            OptionalHeader.intSize32 = 6;
            OptionalHeader.intSize64 = 10;
            return OptionalHeader;
        }());
        headers.OptionalHeader = OptionalHeader;
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var PEFileHeaders = (function () {
            function PEFileHeaders() {
                this.dosHeader = new headers.DosHeader();
                this.dosStub = [];
                this.peHeader = new headers.PEHeader();
                this.optionalHeader = new headers.OptionalHeader();
                this.sectionHeaders = [];
            }
            PEFileHeaders.prototype.toString = function () {
                var result = "dosHeader: " + (this.dosHeader ? this.dosHeader + "" : "null") + " " +
                    "dosStub: " + (this.dosStub ? "[" + this.dosStub.length + "]" : "null") + " " +
                    "peHeader: " + (this.peHeader ? "[" + this.peHeader.machine + "]" : "null") + " " +
                    "optionalHeader: " + (this.optionalHeader ? "[" + pe.formatEnum(this.optionalHeader.subsystem, headers.Subsystem) + "," + this.optionalHeader.imageVersion + "]" : "null") + " " +
                    "sectionHeaders: " + (this.sectionHeaders ? "[" + this.sectionHeaders.length + "]" : "null");
                return result;
            };
            PEFileHeaders.prototype.read = function (reader, async) {
                this._continueRead(reader, async, 0);
            };
            PEFileHeaders.prototype._continueRead = function (reader, async, stage) {
                var _this = this;
                var dosHeaderSize = 64;
                var stageCount = 6;
                switch (stage) {
                    case 0:
                        if (!this.dosHeader)
                            this.dosHeader = new headers.DosHeader();
                        this.dosHeader.read(reader);
                        stage++;
                        if (async && async.progress) {
                            var continueLater = async.progress(stage, stageCount);
                            if (continueLater) {
                                continueLater(function () { return _this._continueRead(reader, async, stage); });
                                return;
                            }
                        }
                    case 1:
                        var dosHeaderLength = this.dosHeader.lfanew - dosHeaderSize;
                        if (dosHeaderLength > 0)
                            this.dosStub = reader.readBytes(dosHeaderLength);
                        else
                            this.dosStub = null;
                        stage++;
                        if (async && async.progress) {
                            var continueLater = async.progress(stage, stageCount);
                            if (continueLater) {
                                continueLater(function () { return _this._continueRead(reader, async, stage); });
                                return;
                            }
                        }
                    case 2:
                        if (!this.peHeader)
                            this.peHeader = new headers.PEHeader();
                        this.peHeader.read(reader);
                        stage++;
                        if (async && async.progress) {
                            var continueLater = async.progress(stage, stageCount);
                            if (continueLater) {
                                continueLater(function () { return _this._continueRead(reader, async, stage); });
                                return;
                            }
                        }
                    case 3:
                        if (!this.optionalHeader)
                            this.optionalHeader = new headers.OptionalHeader();
                        this.optionalHeader.read(reader);
                        stage++;
                        if (async && async.progress) {
                            var continueLater = async.progress(stage, stageCount);
                            if (continueLater) {
                                continueLater(function () { return _this._continueRead(reader, async, stage); });
                                return;
                            }
                        }
                    case 4:
                        if (this.peHeader.numberOfSections > 0) {
                            if (!this.sectionHeaders || this.sectionHeaders.length != this.peHeader.numberOfSections)
                                this.sectionHeaders = Array(this.peHeader.numberOfSections);
                            for (var i = 0; i < this.sectionHeaders.length; i++) {
                                if (!this.sectionHeaders[i])
                                    this.sectionHeaders[i] = new headers.SectionHeader();
                                this.sectionHeaders[i].read(reader);
                            }
                        }
                        if (async) {
                            async(null, this);
                        }
                }
            };
            return PEFileHeaders;
        }());
        headers.PEFileHeaders = PEFileHeaders;
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var PEHeader = (function () {
            function PEHeader() {
                this.pe = headers.PESignature.PE;
                this.machine = headers.Machine.I386;
                this.numberOfSections = 0;
                this.timestamp = new Date(0);
                this.pointerToSymbolTable = 0;
                this.numberOfSymbols = 0;
                this.sizeOfOptionalHeader = 0;
                this.characteristics = headers.ImageCharacteristics.Dll | headers.ImageCharacteristics.Bit32Machine;
            }
            PEHeader.prototype.toString = function () {
                var result = pe.formatEnum(this.machine, headers.Machine) + " " +
                    pe.formatEnum(this.characteristics, headers.ImageCharacteristics) + " " +
                    "Sections[" + this.numberOfSections + "]";
                return result;
            };
            PEHeader.prototype.read = function (reader) {
                this.pe = reader.readInt();
                if (this.pe != headers.PESignature.PE)
                    throw new Error("PE signature is invalid: " + (this.pe).toString(16).toUpperCase() + "h.");
                this.machine = reader.readShort();
                this.numberOfSections = reader.readShort();
                if (!this.timestamp)
                    this.timestamp = new Date(0);
                this.timestamp.setTime(reader.readInt() * 1000);
                this.pointerToSymbolTable = reader.readInt();
                this.numberOfSymbols = reader.readInt();
                this.sizeOfOptionalHeader = reader.readShort();
                this.characteristics = reader.readShort();
            };
            PEHeader.intSize = 6;
            return PEHeader;
        }());
        headers.PEHeader = PEHeader;
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var headers;
    (function (headers) {
        var AddressRange = (function () {
            function AddressRange(address, size) {
                this.address = address;
                this.size = size;
                if (!this.address)
                    this.address = 0;
                if (!this.size)
                    this.size = 0;
            }
            AddressRange.prototype.mapRelative = function (offset) {
                var result = offset - this.address;
                if (result >= 0 && result < this.size)
                    return result;
                else
                    return -1;
            };
            AddressRange.prototype.toString = function () { return this.address.toString(16).toUpperCase() + ":" + this.size.toString(16).toUpperCase() + "h"; };
            return AddressRange;
        }());
        headers.AddressRange = AddressRange;
        var AddressRangeMap = (function (_super) {
            __extends(AddressRangeMap, _super);
            function AddressRangeMap(address, size, virtualAddress) {
                var _this = _super.call(this, address, size) || this;
                _this.virtualAddress = virtualAddress;
                if (!_this.virtualAddress)
                    _this.virtualAddress = 0;
                return _this;
            }
            AddressRangeMap.prototype.toString = function () { return this.address.toString(16).toUpperCase() + ":" + this.size.toString(16).toUpperCase() + "@" + this.virtualAddress + "h"; };
            return AddressRangeMap;
        }(AddressRange));
        headers.AddressRangeMap = AddressRangeMap;
        var SectionHeader = (function (_super) {
            __extends(SectionHeader, _super);
            function SectionHeader() {
                var _this = _super.call(this) || this;
                _this.name = "";
                _this.pointerToRelocations = 0;
                _this.pointerToLinenumbers = 0;
                _this.numberOfRelocations = 0;
                _this.numberOfLinenumbers = 0;
                _this.characteristics = headers.SectionCharacteristics.ContainsCode;
                return _this;
            }
            SectionHeader.prototype.toString = function () {
                var result = this.name + " " + _super.prototype.toString.call(this);
                return result;
            };
            SectionHeader.prototype.read = function (reader) {
                this.name = reader.readZeroFilledAscii(8);
                this.virtualSize = reader.readInt();
                this.virtualAddress = reader.readInt();
                var sizeOfRawData = reader.readInt();
                var pointerToRawData = reader.readInt();
                this.size = sizeOfRawData;
                this.address = pointerToRawData;
                this.pointerToRelocations = reader.readInt();
                this.pointerToLinenumbers = reader.readInt();
                this.numberOfRelocations = reader.readShort();
                this.numberOfLinenumbers = reader.readShort();
                this.characteristics = reader.readInt();
            };
            SectionHeader.intSize = 16;
            return SectionHeader;
        }(AddressRangeMap));
        headers.SectionHeader = SectionHeader;
    })(headers = pe.headers || (pe.headers = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var io;
    (function (io) {
        var checkBufferReaderOverrideOnFirstCreation = false;
        var BufferReader = (function () {
            function BufferReader(view) {
                this.offset = 0;
                this.sections = [];
                this._currentSectionIndex = 0;
                this._currentView = null;
                if (checkBufferReaderOverrideOnFirstCreation) {
                    checkBufferReaderOverrideOnFirstCreation = false;
                    var global = (function () { return this; })();
                    if (!("DataView" in global)) {
                        io.BufferReader = ArrayReader;
                        return new ArrayReader(view);
                    }
                }
                if (!view)
                    return;
                if ("getUint8" in view) {
                    this._currentView = view;
                }
                else if ("byteLength" in view) {
                    this._currentView = new DataView(view);
                }
                else {
                    var arrb = new ArrayBuffer(view.length);
                    this._currentView = new DataView(arrb);
                    for (var i = 0; i < view.length; i++) {
                        this._currentView.setUint8(i, view[i]);
                    }
                }
            }
            BufferReader.prototype.readByte = function () {
                var v = this._getView(1);
                var result = v.getUint8(this.offset);
                this.offset++;
                return result;
            };
            BufferReader.prototype.peekByte = function () {
                var v = this._getView(1);
                var result = v.getUint8(this.offset);
                return result;
            };
            BufferReader.prototype.readShort = function () {
                var v = this._getView(2);
                var result = v.getUint16(this.offset, true);
                this.offset += 2;
                return result;
            };
            BufferReader.prototype.readInt = function () {
                var v = this._getView(4);
                var result = v.getUint32(this.offset, true);
                this.offset += 4;
                return result;
            };
            BufferReader.prototype.readLong = function () {
                var v = this._getView(8);
                var lo = v.getUint32(this.offset, true);
                var hi = v.getUint32(this.offset + 4, true);
                this.offset += 8;
                return new pe.Long(lo, hi);
            };
            BufferReader.prototype.readBytes = function (length) {
                var v = this._getView(length);
                var result = new Uint8Array(v.buffer, v.byteOffset + this.offset, length);
                this.offset += length;
                return result;
            };
            BufferReader.prototype.readZeroFilledAscii = function (length) {
                var v = this._getView(length);
                var chars = [];
                for (var i = 0; i < length; i++) {
                    var charCode = v.getUint8(this.offset + i);
                    if (charCode == 0)
                        continue;
                    chars.push(String.fromCharCode(charCode));
                }
                this.offset += length;
                return chars.join("");
            };
            BufferReader.prototype.readAsciiZ = function (maxLength) {
                if (maxLength === void 0) { maxLength = 1024; }
                var v = this._getView(maxLength);
                var chars = [];
                var byteLength = 0;
                while (true) {
                    var nextChar = v.getUint8(this.offset + chars.length);
                    if (nextChar == 0) {
                        byteLength = chars.length + 1;
                        break;
                    }
                    chars.push(String.fromCharCode(nextChar));
                    if (chars.length == maxLength) {
                        byteLength = chars.length;
                        break;
                    }
                }
                this.offset += byteLength;
                return chars.join("");
            };
            BufferReader.prototype.readUtf8Z = function (maxLength) {
                var v = this._getView(maxLength);
                var buffer = [];
                var isConversionRequired = false;
                for (var i = 0; !maxLength || i < maxLength; i++) {
                    var b = v.getUint8(this.offset + i);
                    if (b == 0) {
                        i++;
                        break;
                    }
                    buffer.push(hexUtf[b]);
                    if (b >= 127)
                        isConversionRequired = true;
                }
                this.offset += i;
                if (isConversionRequired)
                    return decodeURIComponent(buffer.join(""));
                else
                    return buffer.join("");
            };
            BufferReader.prototype.getVirtualOffset = function () {
                var result = this._tryMapToVirtual(this.offset);
                if (result < 0)
                    throw new Error("Cannot map current position into virtual address space.");
                return result;
            };
            BufferReader.prototype.setVirtualOffset = function (rva) {
                if (this._currentSectionIndex >= 0
                    && this._currentSectionIndex < this.sections.length) {
                    var s = this.sections[this._currentSectionIndex];
                    var relative = rva - s.virtualAddress;
                    if (relative >= 0 && relative < s.size) {
                        this.offset = relative + s.address;
                        return;
                    }
                }
                for (var i = 0; i < this.sections.length; i++) {
                    var s = this.sections[i];
                    var relative = rva - s.virtualAddress;
                    if (relative >= 0 && relative < s.size) {
                        this._currentSectionIndex = i;
                        this.offset = relative + s.address;
                        return;
                    }
                }
                throw new Error("Address 0x" + rva.toString(16).toUpperCase() + " is outside of virtual address space.");
            };
            BufferReader.prototype._getView = function (numBytes) {
                return this._currentView;
            };
            BufferReader.prototype._tryMapToVirtual = function (offset) {
                if (this._currentSectionIndex >= 0
                    && this._currentSectionIndex < this.sections.length) {
                    var s = this.sections[this._currentSectionIndex];
                    var relative = offset - s.address;
                    if (relative >= 0 && relative < s.size)
                        return relative + s.virtualAddress;
                }
                for (var i = 0; i < this.sections.length; i++) {
                    var s = this.sections[i];
                    var relative = offset - s.address;
                    if (relative >= 0 && relative < s.size) {
                        this._currentSectionIndex = i;
                        return relative + s.virtualAddress;
                    }
                }
                return -1;
            };
            return BufferReader;
        }());
        io.BufferReader = BufferReader;
        var ArrayReader = (function (_super) {
            __extends(ArrayReader, _super);
            function ArrayReader(_array) {
                var _this = _super.call(this, null) || this;
                _this._array = _array;
                _this.offset = 0;
                _this.sections = [];
                return _this;
            }
            ArrayReader.prototype.readByte = function () {
                var result = this._array[this.offset];
                this.offset++;
                return result;
            };
            ArrayReader.prototype.peekByte = function () {
                var result = this._array[this.offset];
                return result;
            };
            ArrayReader.prototype.readShort = function () {
                var result = this._array[this.offset] +
                    (this._array[this.offset + 1] << 8);
                this.offset += 2;
                return result;
            };
            ArrayReader.prototype.readInt = function () {
                var result = this._array[this.offset] +
                    (this._array[this.offset + 1] << 8) +
                    (this._array[this.offset + 2] << 16) +
                    (this._array[this.offset + 3] * 0x1000000);
                this.offset += 4;
                return result;
            };
            ArrayReader.prototype.readLong = function () {
                var lo = this.readInt();
                var hi = this.readInt();
                return new pe.Long(lo, hi);
            };
            ArrayReader.prototype.readBytes = function (length) {
                var result = this._array.slice(this.offset, this.offset + length);
                this.offset += length;
                return result;
            };
            ArrayReader.prototype.readZeroFilledAscii = function (length) {
                var chars = [];
                for (var i = 0; i < length; i++) {
                    var charCode = this._array[this.offset + i];
                    if (charCode == 0)
                        continue;
                    chars.push(String.fromCharCode(charCode));
                }
                this.offset += length;
                return chars.join("");
            };
            ArrayReader.prototype.readAsciiZ = function (maxLength) {
                if (maxLength === void 0) { maxLength = 1024; }
                var chars = [];
                var byteLength = 0;
                while (true) {
                    var nextChar = this._array[this.offset + chars.length];
                    if (nextChar == 0) {
                        byteLength = chars.length + 1;
                        break;
                    }
                    chars.push(String.fromCharCode(nextChar));
                    if (chars.length == maxLength) {
                        byteLength = chars.length;
                        break;
                    }
                }
                this.offset += byteLength;
                return chars.join("");
            };
            ArrayReader.prototype.readUtf8Z = function (maxLength) {
                var buffer = "";
                var isConversionRequired = false;
                for (var i = 0; !maxLength || i < maxLength; i++) {
                    var b = this._array[this.offset + i];
                    if (b == 0) {
                        i++;
                        break;
                    }
                    if (b < 127) {
                        buffer += String.fromCharCode(b);
                    }
                    else {
                        isConversionRequired = true;
                        buffer += "%";
                        buffer += b.toString(16);
                    }
                }
                this.offset += i;
                if (isConversionRequired)
                    return decodeURIComponent(buffer);
                else
                    return buffer;
            };
            ArrayReader.prototype.getVirtualOffset = function () {
                var result = this._tryMapToVirtual2(this.offset);
                if (result < 0)
                    throw new Error("Cannot map current position into virtual address space.");
                return result;
            };
            ArrayReader.prototype.setVirtualOffset = function (rva) {
                if (this._currentSectionIndex >= 0
                    && this._currentSectionIndex < this.sections.length) {
                    var s = this.sections[this._currentSectionIndex];
                    var relative = rva - s.virtualAddress;
                    if (relative >= 0 && relative < s.size) {
                        this.offset = relative + s.address;
                        return;
                    }
                }
                for (var i = 0; i < this.sections.length; i++) {
                    var s = this.sections[i];
                    var relative = rva - s.virtualAddress;
                    if (relative >= 0 && relative < s.size) {
                        this._currentSectionIndex = i;
                        this.offset = relative + s.address;
                        return;
                    }
                }
                throw new Error("Address is outside of virtual address space.");
            };
            ArrayReader.prototype._tryMapToVirtual2 = function (offset) {
                if (this._currentSectionIndex >= 0
                    && this._currentSectionIndex < this.sections.length) {
                    var s = this.sections[this._currentSectionIndex];
                    var relative = offset - s.address;
                    if (relative >= 0 && relative < s.size)
                        return relative + s.virtualAddress;
                }
                for (var i = 0; i < this.sections.length; i++) {
                    var s = this.sections[i];
                    var relative = offset - s.address;
                    if (relative >= 0 && relative < s.size) {
                        this._currentSectionIndex = i;
                        return relative + s.virtualAddress;
                    }
                }
                return -1;
            };
            return ArrayReader;
        }(BufferReader));
        io.ArrayReader = ArrayReader;
        var hexUtf = (function () {
            var buf = [];
            for (var i = 0; i < 127; i++) {
                buf.push(String.fromCharCode(i));
            }
            for (var i = 127; i < 256; i++) {
                buf.push("%" + i.toString(16));
            }
            return buf;
        })();
        function getFileBufferReader(file, onsuccess, onfailure) {
            var reader = new FileReader();
            reader.onerror = onfailure;
            reader.onloadend = function () {
                if (reader.readyState != 2) {
                    onfailure(reader.error);
                    return;
                }
                var result;
                try {
                    var resultArrayBuffer;
                    resultArrayBuffer = reader.result;
                    result = new BufferReader(resultArrayBuffer);
                }
                catch (error) {
                    onfailure(error);
                }
                onsuccess(result);
            };
            reader.readAsArrayBuffer(file);
        }
        io.getFileBufferReader = getFileBufferReader;
        function getUrlBufferReader(url, onsuccess, onfailure) {
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = "arraybuffer";
            var requestLoadCompleteCalled = false;
            function requestLoadComplete() {
                if (requestLoadCompleteCalled)
                    return;
                requestLoadCompleteCalled = true;
                var result;
                try {
                    var response = request.response;
                    if (response) {
                        var resultDataView = new DataView(response);
                        result = new BufferReader(resultDataView);
                    }
                    else {
                        var responseBody = new VBArray(request.responseBody).toArray();
                        var result = new BufferReader(responseBody);
                    }
                }
                catch (error) {
                    onfailure(error);
                    return;
                }
                onsuccess(result);
            }
            ;
            request.onerror = onfailure;
            request.onloadend = function () { return requestLoadComplete; };
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    requestLoadComplete();
                }
            };
            request.send();
        }
        io.getUrlBufferReader = getUrlBufferReader;
    })(io = pe.io || (pe.io = {}));
})(pe || (pe = {}));
module.exports = pe.io;
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var AppDomain = (function () {
            function AppDomain() {
                this.assemblies = [];
                this.mscorlib = new managed.Assembly();
                this.unresolvedAssemblies = [];
                this.mscorlib.name = "mscorlib";
                var objectType = new managed.Type(null, this.mscorlib, "System", "Object");
                var valueType = new managed.Type(objectType, this.mscorlib, "System", "ValueType");
                var enumType = new managed.Type(valueType, this.mscorlib, "System", "Enum");
                this.mscorlib.types.push(new managed.Type(valueType, this.mscorlib, "System", "Void"), new managed.Type(valueType, this.mscorlib, "System", "Boolean"), new managed.Type(valueType, this.mscorlib, "System", "Char"), new managed.Type(valueType, this.mscorlib, "System", "SByte"), new managed.Type(valueType, this.mscorlib, "System", "Byte"), new managed.Type(valueType, this.mscorlib, "System", "Int16"), new managed.Type(valueType, this.mscorlib, "System", "UInt16"), new managed.Type(valueType, this.mscorlib, "System", "Int32"), new managed.Type(valueType, this.mscorlib, "System", "UInt32"), new managed.Type(valueType, this.mscorlib, "System", "Int64"), new managed.Type(valueType, this.mscorlib, "System", "UInt64"), new managed.Type(valueType, this.mscorlib, "System", "Single"), new managed.Type(valueType, this.mscorlib, "System", "Double"), new managed.Type(valueType, this.mscorlib, "System", "String"), new managed.Type(objectType, this.mscorlib, "System", "TypedReference"), new managed.Type(valueType, this.mscorlib, "System", "IntPtr"), new managed.Type(valueType, this.mscorlib, "System", "UIntPtr"), objectType, valueType, enumType, new managed.Type(objectType, this.mscorlib, "System", "Type"));
                this.assemblies.push(this.mscorlib);
            }
            AppDomain.prototype.read = function (reader, async) {
                var context = new AssemblyReading(this, reader, async);
                var result = context.read();
                if (result) {
                }
                return result;
            };
            AppDomain.prototype.resolveAssembly = function (name, version, publicKeyToken, culture) {
                var asm;
                for (var i = 0; i < this.assemblies.length; i++) {
                    var asm = this.assemblies[i];
                    if ((asm.name && name && asm.name.toLowerCase() === name.toLowerCase())
                        || (!asm.name && !name)) {
                        if (asm.isSpeculative) {
                            if (version)
                                asm.version = version;
                            if (publicKeyToken)
                                asm.publicKeyToken = publicKeyToken;
                            if (culture)
                                asm.culture = culture;
                        }
                        return asm;
                    }
                }
                if (name && name.toLowerCase() === "mscorlib"
                    && this.assemblies[0].isSpeculative)
                    return this.assemblies[0];
                asm = new managed.Assembly();
                asm.name = name;
                asm.version = version;
                asm.publicKeyToken = publicKeyToken;
                asm.culture = culture;
                return asm;
            };
            return AppDomain;
        }());
        managed.AppDomain = AppDomain;
        var AssemblyReading = (function () {
            function AssemblyReading(appDomain, _reader, _async) {
                this.appDomain = appDomain;
                this._reader = _reader;
                this._async = _async;
                this.fileHeaders = null;
                this.clrDirectory = null;
                this.clrMetadata = null;
                this.metadataStreams = null;
                this.tableStream = null;
                this._stage = 0;
            }
            AssemblyReading.prototype.read = function () {
                var stageCount = 0;
                switch (this._stage) {
                    case 0:
                        this._reader.offset = 0;
                        this.readFileHeaders();
                        if (this._progressContinueLater())
                            return;
                    case 1:
                        this.readClrDirectory();
                        if (this._progressContinueLater())
                            return;
                    case 2:
                        this.readClrMetadata();
                        if (this._progressContinueLater())
                            return;
                    case 3:
                        this.readMetadataStreams();
                        if (this._progressContinueLater())
                            return;
                    case 4:
                        this.readTableStream();
                        if (this._progressContinueLater())
                            return;
                    case 5:
                        this.populateStrings(this.tableStream.stringIndices);
                        if (this._progressContinueLater())
                            return;
                    case 6:
                        var mscorlib = this._getMscorlibIfThisShouldBeOne();
                        if (mscorlib)
                            this.tableStream.tables[managed.metadata.TableKind.Assembly][0].def = mscorlib;
                        if (this._progressContinueLater())
                            return;
                    case 7:
                        this.completeTables();
                        if (this._progressContinueLater())
                            return;
                    case 8:
                        var result = this._createAssemblyFromTables();
                        result.fileHeaders = this.fileHeaders;
                        if (this._async)
                            this._async(null, result);
                        else
                            return result;
                }
            };
            AssemblyReading.prototype._progressContinueLater = function () {
                var _this = this;
                this._stage++;
                if (this._async && this._async.progress) {
                    var continueLater = this._async.progress(this._stage, 9);
                    if (continueLater) {
                        continueLater(function () { return _this.read(); });
                        return true;
                    }
                }
                return false;
            };
            AssemblyReading.prototype._createAssemblyFromTables = function () {
                var assemblyTable = this.tableStream.tables[managed.metadata.TableKind.Assembly];
                var assemblyRow = assemblyTable[0];
                var assembly = assemblyRow.def;
                var typeDefTable = this.tableStream.tables[managed.metadata.TableKind.TypeDef];
                if (typeDefTable)
                    assembly.types = typeDefTable.map(function (t) { return t.def; });
                assembly.runtimeVersion = this.clrDirectory.runtimeVersion;
                assembly.imageFlags = this.clrDirectory.imageFlags;
                assembly.specificRuntimeVersion = this.clrMetadata.runtimeVersion;
                assembly.metadataVersion = this.clrMetadata.metadataVersion;
                assembly.tableStreamVersion = this.tableStream.version;
                var moduleTable = this.tableStream.tables[managed.metadata.TableKind.Module];
                if (moduleTable && moduleTable.length) {
                    var moduleRow = moduleTable[0];
                }
                return assembly;
            };
            AssemblyReading.prototype._getMscorlibIfThisShouldBeOne = function () {
                var stringIndices = this.tableStream.stringIndices;
                var assemblyTable = this.tableStream.tables[0x20];
                if (!assemblyTable || !assemblyTable.length)
                    return null;
                var assemblyRow = assemblyTable[0];
                var simpleAssemblyName = stringIndices[assemblyRow.name];
                if (!simpleAssemblyName
                    || simpleAssemblyName.toLowerCase() !== "mscorlib")
                    return null;
                if (!this.appDomain.assemblies[0].isSpeculative)
                    return null;
                var typeDefTable = this.tableStream.tables[0x02];
                if (!typeDefTable)
                    return null;
                var containsSystemObject = false;
                var containsSystemString = false;
                for (var i = 0; i < typeDefTable.length; i++) {
                    var typeDefRow = typeDefTable[i];
                    var name = stringIndices[typeDefRow.name];
                    var namespace = stringIndices[typeDefRow.namespace];
                    if (namespace !== "System")
                        continue;
                    if (name === "Object")
                        containsSystemObject = true;
                    else if (name === "String")
                        containsSystemString = true;
                }
                if (containsSystemObject && containsSystemString)
                    return this.appDomain.assemblies[0];
                else
                    return null;
            };
            AssemblyReading.prototype._readBlobHex = function (blobIndex) {
                var saveOffset = this._reader.offset;
                this._reader.setVirtualOffset(this.metadataStreams.blobs.address);
                this._reader.setVirtualOffset(this.metadataStreams.blobs.address + blobIndex);
                var length = this._readBlobSize();
                var result = "";
                for (var i = 0; i < length; i++) {
                    var hex = this._reader.readByte().toString(16);
                    if (hex.length == 1)
                        result += "0";
                    result += hex;
                }
                this._reader.offset = saveOffset;
                return result.toUpperCase();
            };
            AssemblyReading.prototype._readBlobBytes = function (blobIndex) {
                var saveOffset = this._reader.offset;
                this._reader.setVirtualOffset(this.metadataStreams.blobs.address);
                this._reader.setVirtualOffset(this.metadataStreams.blobs.address + blobIndex);
                var length = this._readBlobSize();
                var result = [];
                for (var i = 0; i < length; i++) {
                    var b = this._reader.readByte();
                    result.push(b);
                }
                this._reader.offset = saveOffset;
                return result;
            };
            AssemblyReading.prototype._readBlobSize = function () {
                var length;
                var b0 = this._reader.readByte();
                if (b0 < 0x80) {
                    length = b0;
                }
                else {
                    var b1 = this._reader.readByte();
                    if ((b0 & 0xC0) == 0x80) {
                        length = ((b0 & 0x3F) << 8) + b1;
                    }
                    else {
                        var b2 = this._reader.readByte();
                        var b3 = this._reader.readByte();
                        length = ((b0 & 0x3F) << 24) + (b1 << 16) + (b2 << 8) + b3;
                    }
                }
                return length;
            };
            AssemblyReading.prototype.readFileHeaders = function () {
                this.fileHeaders = new pe.headers.PEFileHeaders();
                this.fileHeaders.read(this._reader);
                this._reader.sections = this.fileHeaders.sectionHeaders;
            };
            AssemblyReading.prototype.readClrDirectory = function () {
                var clrDataDirectory = this.fileHeaders.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr];
                this._reader.setVirtualOffset(clrDataDirectory.address);
                this.clrDirectory = new managed.metadata.ClrDirectory();
                this.clrDirectory.read(this._reader);
            };
            AssemblyReading.prototype.readClrMetadata = function () {
                this._reader.setVirtualOffset(this.clrDirectory.metadataDir.address);
                this.clrMetadata = new managed.metadata.ClrMetadata();
                this.clrMetadata.read(this._reader);
            };
            AssemblyReading.prototype.readMetadataStreams = function () {
                this.metadataStreams = new managed.metadata.MetadataStreams();
                this.metadataStreams.read(this.clrDirectory.metadataDir.address, this.clrMetadata.streamCount, this._reader);
            };
            AssemblyReading.prototype.readTableStream = function () {
                this.tableStream = new managed.metadata.TableStream();
                this.tableStream.read(this._reader, this.metadataStreams.strings.size, this.metadataStreams.guids.length, this.metadataStreams.blobs.size);
            };
            AssemblyReading.prototype.populateStrings = function (stringIndices) {
                var saveOffset = this._reader.offset;
                stringIndices[0] = null;
                for (var i in stringIndices) {
                    if (i > 0) {
                        var iNum = Number(i);
                        this._reader.setVirtualOffset(this.metadataStreams.strings.address + iNum);
                        stringIndices[iNum] = this._reader.readUtf8Z(1024 * 1024 * 1024);
                    }
                }
            };
            AssemblyReading.prototype.completeTables = function () {
                var _this = this;
                var completionReader = new managed.metadata.TableCompletionReader(this.appDomain, this.tableStream, this.metadataStreams, this.tableStream.codedIndexReaders, function (blobIndex) { return _this._readBlobBytes(blobIndex); });
                for (var iTab = 0; iTab < this.tableStream.tables.length; iTab++) {
                    var table = this.tableStream.tables[iTab];
                    if (!table || !table.length || !table[0].precomplete)
                        continue;
                    for (var i = 0; i < table.length; i++) {
                        var row = table[i];
                        var nextRow = i + 1 < table.length ? table[i + 1] : null;
                        row.precomplete(completionReader, nextRow);
                    }
                }
                for (var iTab = 0; iTab < this.tableStream.tables.length; iTab++) {
                    var table = this.tableStream.tables[iTab];
                    if (!table || !table.length || !table[0].complete)
                        continue;
                    for (var i = 0; i < table.length; i++) {
                        var row = table[i];
                        var nextRow = i + 1 < table.length ? table[i + 1] : null;
                        row.complete(completionReader, nextRow);
                    }
                }
            };
            return AssemblyReading;
        }());
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
module.exports = pe;
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var Assembly = (function () {
            function Assembly() {
                this.isSpeculative = true;
                this.fileHeaders = new pe.headers.PEFileHeaders();
                this.name = "";
                this.version = null;
                this.publicKey = null;
                this.publicKeyToken = null;
                this.culture = null;
                this.attributes = 0;
                this.runtimeVersion = "";
                this.specificRuntimeVersion = "";
                this.imageFlags = 0;
                this.metadataVersion = "";
                this.tableStreamVersion = "";
                this.generation = 0;
                this.moduleName = "";
                this.mvid = "";
                this.encId = "";
                this.encBaseId = "";
                this.types = [];
                this.customAttributes = [];
            }
            Assembly.prototype.toString = function () {
                return this.name + ", Version=" + this.version + ", Culture=" + (this.culture ? this.culture : "neutral") + ", PublicKeyToken=" + (this.publicKeyToken && this.publicKeyToken.length ? this.publicKeyToken : "null");
            };
            return Assembly;
        }());
        managed.Assembly = Assembly;
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var EventInfo = (function () {
            function EventInfo() {
                this.owner = null;
                this.name = null;
                this.eventType = null;
            }
            EventInfo.prototype.toString = function () {
                return (this.eventType ? this.name : this.name + ':' + this.eventType) + ' { add; remove }';
            };
            return EventInfo;
        }());
        managed.EventInfo = EventInfo;
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var FieldInfo = (function () {
            function FieldInfo() {
                this.attributes = 0;
                this.name = "";
                this.fieldType = null;
                this.fieldOffset = null;
                this.customAttributes = null;
            }
            FieldInfo.prototype.toString = function () {
                return this.fieldType ? this.name : this.name + ':' + this.fieldType;
            };
            return FieldInfo;
        }());
        managed.FieldInfo = FieldInfo;
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var MethodInfo = (function () {
            function MethodInfo() {
                this.owner = null;
                this.name = '';
                this.attributes = 0;
                this.parameters = [];
                this.customAttributes = null;
            }
            MethodInfo.prototype.toString = function () {
                return this.name + '(' + this.parameters.join(', ') + ')';
            };
            return MethodInfo;
        }());
        managed.MethodInfo = MethodInfo;
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var ParameterInfo = (function () {
            function ParameterInfo() {
                this.owner = null;
                this.name = null;
                this.attributes = 0;
                this.customAttributes = null;
                this.parameterType = null;
            }
            ParameterInfo.prototype.toString = function () {
                return this.name;
            };
            return ParameterInfo;
        }());
        managed.ParameterInfo = ParameterInfo;
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var PropertyInfo = (function () {
            function PropertyInfo() {
                this.owner = null;
                this.name = null;
                this.propertyType = null;
                this.attributes = 0;
                this.customAttributes = null;
            }
            return PropertyInfo;
        }());
        managed.PropertyInfo = PropertyInfo;
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var Type = (function () {
            function Type(baseType, assembly, namespace, name) {
                this.baseType = baseType;
                this.assembly = assembly;
                this.namespace = namespace;
                this.name = name;
                this.isSpeculative = true;
                this.attributes = 0;
                this.fields = [];
                this.methods = [];
                this.properties = [];
                this.events = [];
                this.genericPrototype = null;
                this.genericArguments = [];
                this.interfaces = [];
                this.netedTypes = [];
                this.nestingParent = null;
                this.layout = null;
                this.customAttributes = null;
            }
            Type.prototype.getBaseType = function () { return this.baseType; };
            Type.prototype.getAssembly = function () { return this.assembly; };
            Type.prototype.getFullName = function () {
                if (this.namespace && this.namespace.length)
                    return this.namespace + "." + this.name;
                else
                    return this.name;
            };
            Type.prototype.toString = function () {
                if (this.genericArguments.length) {
                    var fullName = this.getFullName();
                    var qpos = fullName.indexOf('`');
                    if (qpos >= 0)
                        fullName = fullName.substring(0, qpos);
                    fullName += '<' + this.genericArguments.join(',') + '>';
                    return fullName;
                }
                else {
                    return this.getFullName();
                }
            };
            return Type;
        }());
        managed.Type = Type;
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var ClrDirectory = (function () {
                function ClrDirectory() {
                    this.cb = 0;
                    this.runtimeVersion = "";
                    this.imageFlags = 0;
                    this.metadataDir = null;
                    this.entryPointToken = 0;
                    this.resourcesDir = null;
                    this.strongNameSignatureDir = null;
                    this.codeManagerTableDir = null;
                    this.vtableFixupsDir = null;
                    this.exportAddressTableJumpsDir = null;
                    this.managedNativeHeaderDir = null;
                }
                ClrDirectory.prototype.read = function (readerAtClrDataDirectory) {
                    var clrDirReader = readerAtClrDataDirectory;
                    this.cb = clrDirReader.readInt();
                    if (this.cb < ClrDirectory._clrHeaderSize)
                        throw new Error("Unexpectedly short CLR header structure " + this.cb + " reported by Cb field " +
                            "(expected at least " + ClrDirectory._clrHeaderSize + ").");
                    this.runtimeVersion = clrDirReader.readShort() + "." + clrDirReader.readShort();
                    this.metadataDir = new pe.headers.AddressRange(clrDirReader.readInt(), clrDirReader.readInt());
                    this.imageFlags = clrDirReader.readInt();
                    this.entryPointToken = clrDirReader.readInt();
                    this.resourcesDir = new pe.headers.AddressRange(clrDirReader.readInt(), clrDirReader.readInt());
                    this.strongNameSignatureDir = new pe.headers.AddressRange(clrDirReader.readInt(), clrDirReader.readInt());
                    this.codeManagerTableDir = new pe.headers.AddressRange(clrDirReader.readInt(), clrDirReader.readInt());
                    this.vtableFixupsDir = new pe.headers.AddressRange(clrDirReader.readInt(), clrDirReader.readInt());
                    this.exportAddressTableJumpsDir = new pe.headers.AddressRange(clrDirReader.readInt(), clrDirReader.readInt());
                    this.managedNativeHeaderDir = new pe.headers.AddressRange(clrDirReader.readInt(), clrDirReader.readInt());
                };
                ClrDirectory._clrHeaderSize = 72;
                return ClrDirectory;
            }());
            metadata.ClrDirectory = ClrDirectory;
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var ClrMetadata = (function () {
                function ClrMetadata() {
                    this.mdSignature = metadata.ClrMetadataSignature.Signature;
                    this.metadataVersion = "";
                    this.runtimeVersion = "";
                    this.mdReserved = 0;
                    this.mdFlags = 0;
                    this.streamCount = 0;
                }
                ClrMetadata.prototype.read = function (clrDirReader) {
                    this.mdSignature = clrDirReader.readInt();
                    if (this.mdSignature != metadata.ClrMetadataSignature.Signature)
                        throw new Error("Invalid CLR metadata signature field " + this.mdSignature.toString(16) + "h (expected " + metadata.ClrMetadataSignature.Signature.toString(16).toUpperCase() + "h).");
                    this.metadataVersion = clrDirReader.readShort() + "." + clrDirReader.readShort();
                    this.mdReserved = clrDirReader.readInt();
                    var metadataStringVersionLength = clrDirReader.readInt();
                    this.runtimeVersion = clrDirReader.readZeroFilledAscii(metadataStringVersionLength);
                    this.mdFlags = clrDirReader.readShort();
                    this.streamCount = clrDirReader.readShort();
                };
                return ClrMetadata;
            }());
            metadata.ClrMetadata = ClrMetadata;
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var CodedIndexReader = (function () {
                function CodedIndexReader(tables, tableKinds) {
                    this.tables = tables;
                    this.tableKinds = tableKinds;
                    this.tableKindBitCount = metadata.calcRequredBitCount(tableKinds.length - 1);
                    var maxTableLength = 0;
                    for (var i = 0; i < tableKinds.length; i++) {
                        var t = tables[tableKinds[i]];
                        var tableLength = t ? t.length : 0;
                        if (tableLength > maxTableLength)
                            maxTableLength = tableLength;
                    }
                    this.rowIndexBitCount = metadata.calcRequredBitCount(maxTableLength);
                    this.isShortForm = this.tableKindBitCount + this.rowIndexBitCount <= 16;
                }
                CodedIndexReader.prototype.readCodedIndex = function (reader) {
                    return this.isShortForm ? reader.readShort() : reader.readInt();
                };
                CodedIndexReader.prototype.lookup = function (codedIndex) {
                    var rowIndex = codedIndex >> this.tableKindBitCount;
                    if (rowIndex === 0)
                        return null;
                    var tableKindIndex = codedIndex - (rowIndex << this.tableKindBitCount);
                    var tableKind = this.tableKinds[tableKindIndex];
                    var table = this.tables[tableKind];
                    if (!table)
                        return null;
                    var row = table[rowIndex - 1];
                    if (!row)
                        return null;
                    var result = row.def;
                    return result;
                };
                return CodedIndexReader;
            }());
            metadata.CodedIndexReader = CodedIndexReader;
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var CodedIndexReaders = (function () {
                function CodedIndexReaders(_tables) {
                    this._tables = _tables;
                    this.resolutionScope = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.Module,
                        metadata.TableKind.ModuleRef,
                        metadata.TableKind.AssemblyRef,
                        metadata.TableKind.TypeRef
                    ]);
                    this.typeDefOrRef = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.TypeDef,
                        metadata.TableKind.TypeRef,
                        metadata.TableKind.TypeSpec
                    ]);
                    this.hasConstant = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.Field,
                        metadata.TableKind.Param,
                        metadata.TableKind.Property
                    ]);
                    this.hasCustomAttribute = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.MethodDef,
                        metadata.TableKind.Field,
                        metadata.TableKind.TypeRef,
                        metadata.TableKind.TypeDef,
                        metadata.TableKind.Param,
                        metadata.TableKind.InterfaceImpl,
                        metadata.TableKind.MemberRef,
                        metadata.TableKind.Module,
                        0xFF,
                        metadata.TableKind.Property,
                        metadata.TableKind.Event,
                        metadata.TableKind.StandAloneSig,
                        metadata.TableKind.ModuleRef,
                        metadata.TableKind.TypeSpec,
                        metadata.TableKind.Assembly,
                        metadata.TableKind.AssemblyRef,
                        metadata.TableKind.File,
                        metadata.TableKind.ExportedType,
                        metadata.TableKind.ManifestResource,
                        metadata.TableKind.GenericParam,
                        metadata.TableKind.GenericParamConstraint,
                        metadata.TableKind.MethodSpec
                    ]);
                    this.customAttributeType = new metadata.CodedIndexReader(this._tables, [
                        0xFF,
                        0xFF,
                        metadata.TableKind.MethodDef,
                        metadata.TableKind.MemberRef,
                        0xFF
                    ]);
                    this.hasDeclSecurity = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.TypeDef,
                        metadata.TableKind.MethodDef,
                        metadata.TableKind.Assembly
                    ]);
                    this.implementation = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.File,
                        metadata.TableKind.AssemblyRef,
                        metadata.TableKind.ExportedType
                    ]);
                    this.hasFieldMarshal = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.Field,
                        metadata.TableKind.Param
                    ]);
                    this.typeOrMethodDef = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.TypeDef,
                        metadata.TableKind.MethodDef
                    ]);
                    this.memberForwarded = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.Field,
                        metadata.TableKind.MethodDef
                    ]);
                    this.memberRefParent = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.TypeDef,
                        metadata.TableKind.TypeRef,
                        metadata.TableKind.ModuleRef,
                        metadata.TableKind.MethodDef,
                        metadata.TableKind.TypeSpec
                    ]);
                    this.methodDefOrRef = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.MethodDef,
                        metadata.TableKind.MemberRef
                    ]);
                    this.hasSemantics = new metadata.CodedIndexReader(this._tables, [
                        metadata.TableKind.Event,
                        metadata.TableKind.Property
                    ]);
                }
                return CodedIndexReaders;
            }());
            metadata.CodedIndexReaders = CodedIndexReaders;
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var MetadataStreams = (function () {
                function MetadataStreams() {
                    this.guids = [];
                    this.strings = null;
                    this.blobs = null;
                    this.tables = null;
                }
                MetadataStreams.prototype.read = function (metadataBaseAddress, streamCount, reader) {
                    var guidRange;
                    for (var i = 0; i < streamCount; i++) {
                        var range = new pe.headers.AddressRange(reader.readInt(), reader.readInt());
                        range.address += metadataBaseAddress;
                        var name = this._readAlignedNameString(reader);
                        switch (name) {
                            case "#GUID":
                                guidRange = range;
                                continue;
                            case "#Strings":
                                this.strings = range;
                                continue;
                            case "#Blob":
                                this.blobs = range;
                                continue;
                            case "#~":
                            case "#-":
                                this.tables = range;
                                continue;
                        }
                        this[name] = range;
                    }
                    if (guidRange) {
                        var saveOffset = reader.offset;
                        reader.setVirtualOffset(guidRange.address);
                        this.guids = Array(guidRange.size / 16);
                        for (var i = 0; i < this.guids.length; i++) {
                            var guid = this._readGuidForStream(reader);
                            this.guids[i] = guid;
                        }
                        reader.offset = saveOffset;
                    }
                };
                MetadataStreams.prototype._readAlignedNameString = function (reader) {
                    var result = "";
                    while (true) {
                        var b = reader.readByte();
                        if (b == 0)
                            break;
                        result += String.fromCharCode(b);
                    }
                    var skipCount = -1 + ((result.length + 4) & ~3) - result.length;
                    for (var i = 0; i < skipCount; i++) {
                        reader.readByte();
                    }
                    return result;
                };
                MetadataStreams.prototype._readGuidForStream = function (reader) {
                    var guid = "{";
                    for (var i = 0; i < 4; i++) {
                        var hex = reader.readInt().toString(16);
                        guid +=
                            "00000000".substring(0, 8 - hex.length) + hex;
                    }
                    guid += "}";
                    return guid;
                };
                return MetadataStreams;
            }());
            metadata.MetadataStreams = MetadataStreams;
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var SignatureReader = (function () {
                function SignatureReader(_tables) {
                    this._tables = _tables;
                }
                SignatureReader.prototype.readMethodDefSig = function (reader, def) {
                    var callingConvention = reader.readByte();
                    var genParamCount = 0;
                    if (callingConvention & SignatureReader.CallingConvention.Generic)
                        genParamCount = this._readCompressed(reader);
                    var paramCount = this._readCompressed(reader);
                    var returnType = this.readRefType(reader);
                    var params = [];
                    for (var i = 0; i < paramCount; i++) {
                        var p = this.readParam(reader);
                        params.push(p);
                    }
                };
                SignatureReader.prototype.readMethodRefSig = function (reader) {
                    var callingConvention = reader.readByte();
                    var genParamCount = 0;
                    if (callingConvention & SignatureReader.CallingConvention.Generic)
                        genParamCount = this._readCompressed(reader);
                    var paramCount = this._readCompressed(reader);
                    var returnType = this.readRefType(reader);
                    var params = [];
                    var varargs = [];
                    for (var i = 0; i < paramCount; i++) {
                        var isvarargs = varargs.length > 0;
                        if (!isvarargs) {
                            var expectSentinel = reader.peekByte();
                            if (expectSentinel === SignatureReader.CallingConvention.Sentinel) {
                                reader.readByte();
                                isvarargs = true;
                            }
                        }
                        var p = this.readParam(reader);
                        if (isvarargs)
                            varargs.push(p);
                        else
                            params.push(p);
                    }
                };
                SignatureReader.prototype.readStandAloneMethodSig = function (reader, def) {
                    var callingConvention = reader.readByte();
                    var paramCount = this._readCompressed(reader);
                    var returnType = this.readRefType(reader);
                    var params = [];
                    var varargs = [];
                    for (var i = 0; i < paramCount; i++) {
                        var isvarargs = varargs.length > 0;
                        if (!isvarargs) {
                            var expectSentinel = reader.peekByte();
                            if (expectSentinel === SignatureReader.CallingConvention.Sentinel) {
                                reader.readByte();
                                isvarargs = true;
                            }
                        }
                        var p = this.readParam(reader);
                        if (isvarargs)
                            varargs.push(p);
                        else
                            params.push(p);
                    }
                };
                SignatureReader.prototype.readFieldSig = function (reader, def) {
                    var callingConvention = reader.readByte();
                    if (callingConvention !== SignatureReader.CallingConvention.Field)
                        throw new Error('Expected CallingConvention.Field, encountered ' + pe.formatEnum(callingConvention, SignatureReader.CallingConvention) + '.');
                    var customMod = this.readCustomMod(reader);
                    var type = this.readType(reader);
                    def.fieldType = type;
                };
                SignatureReader.prototype.readPropertySig = function (reader, def) {
                    var callingConvention = reader.readByte();
                    if (callingConvention !== SignatureReader.CallingConvention.Property)
                        throw new Error('Expected CallingConvention.Property, encountered ' + pe.formatEnum(callingConvention, SignatureReader.CallingConvention) + '.');
                    var paramCount = this._readCompressed(reader);
                    while (true) {
                        var customMod = this.readCustomMod(reader);
                        if (customMod) { }
                        else
                            break;
                    }
                    var type = this.readType(reader);
                    var params = [];
                    for (var i = 0; i < paramCount; i++) {
                        var p = this.readParam(reader);
                        params.push(p);
                    }
                    def.propertyType = type;
                };
                SignatureReader.prototype.readLocalVarSig = function (reader) {
                    var callingConvention = reader.readByte();
                    if (callingConvention !== SignatureReader.CallingConvention.Local)
                        throw new Error('Expected CallingConvention.Local, encountered ' + pe.formatEnum(callingConvention, SignatureReader.CallingConvention) + '.');
                    var count = this._readCompressed(reader);
                    var locals = [];
                    for (var i = 0; i < count; i++) {
                        var peekNext = reader.peekByte();
                        if (peekNext === metadata.ElementType.TypedByRef) {
                            reader.readByte();
                            var typedByRef = null;
                            locals.push();
                        }
                        var customMods = [];
                        var constraints = [];
                        while (true) {
                            var customMod = this.readCustomMod(reader);
                            if (customMod) {
                                customMods.push(customMod);
                                var eitherFound = true;
                            }
                            var constraint = this.readConstraint(reader);
                            if (constraint) {
                                constraints.push(constraint);
                                eitherFound = true;
                            }
                            if (eitherFound)
                                break;
                        }
                        var isByRef = false;
                        peekNext = reader.peekByte();
                        if (peekNext === metadata.ElementType.ByRef) {
                            isByRef = true;
                            reader.readByte();
                        }
                        var type = this.readType(reader);
                    }
                };
                SignatureReader.prototype.readRefType = function (reader) {
                    return null;
                };
                SignatureReader.prototype.readConstraint = function (reader) {
                };
                SignatureReader.prototype.readParam = function (reader) {
                };
                SignatureReader.prototype.readCustomMod = function (reader) {
                };
                SignatureReader.prototype.readType = function (reader) {
                    return null;
                };
                SignatureReader.prototype._readCompressed = function (reader) {
                    var b0 = reader.readByte();
                    if (!(b0 & 0x80))
                        return b0;
                    var b1 = reader.readByte();
                    if (!(b0 & 0x40))
                        return ((b0 & 0x7F) << 8) | b1;
                    var b2 = reader.readByte();
                    var b3 = reader.readByte();
                    return ((b0 & 0x3F) << 24) |
                        (b1 << 16) |
                        (b2 << 8) |
                        b3;
                };
                SignatureReader.prototype._readCompressedSigned = function (reader) {
                    return this._readCompressed(reader);
                };
                return SignatureReader;
            }());
            metadata.SignatureReader = SignatureReader;
            (function (SignatureReader) {
                var CallingConvention;
                (function (CallingConvention) {
                    CallingConvention[CallingConvention["Default"] = 0] = "Default";
                    CallingConvention[CallingConvention["C"] = 1] = "C";
                    CallingConvention[CallingConvention["StdCall"] = 2] = "StdCall";
                    CallingConvention[CallingConvention["ThisCall"] = 3] = "ThisCall";
                    CallingConvention[CallingConvention["FastCall"] = 4] = "FastCall";
                    CallingConvention[CallingConvention["VarArg"] = 5] = "VarArg";
                    CallingConvention[CallingConvention["Field"] = 6] = "Field";
                    CallingConvention[CallingConvention["Property"] = 8] = "Property";
                    CallingConvention[CallingConvention["Local"] = 7] = "Local";
                    CallingConvention[CallingConvention["Generic"] = 16] = "Generic";
                    CallingConvention[CallingConvention["HasThis"] = 32] = "HasThis";
                    CallingConvention[CallingConvention["ExplicitThis"] = 64] = "ExplicitThis";
                    CallingConvention[CallingConvention["Sentinel"] = 65] = "Sentinel";
                })(CallingConvention = SignatureReader.CallingConvention || (SignatureReader.CallingConvention = {}));
            })(SignatureReader = metadata.SignatureReader || (metadata.SignatureReader = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var TableCompletionReader = (function () {
                function TableCompletionReader(_appDomain, _tableStream, _metadataStreams, _codedIndexReaders, readPublicKey) {
                    this._appDomain = _appDomain;
                    this._tableStream = _tableStream;
                    this._metadataStreams = _metadataStreams;
                    this._codedIndexReaders = _codedIndexReaders;
                    this.readPublicKey = readPublicKey;
                }
                TableCompletionReader.prototype.readString = function (index) {
                    return this._tableStream.stringIndices[index];
                };
                TableCompletionReader.prototype.readGuid = function (index) {
                    return this._metadataStreams.guids[index];
                };
                TableCompletionReader.prototype.copyFieldRange = function (fields, start, end, owner) {
                    this._copyDefRange(fields, metadata.TableKind.Field, start, end, owner);
                };
                TableCompletionReader.prototype.copyMethodRange = function (methods, start, end, owner) {
                    this._copyDefRange(methods, metadata.TableKind.MethodDef, start, end, owner);
                };
                TableCompletionReader.prototype.copyParamRange = function (parameters, start, end, owner) {
                    this._copyDefRange(parameters, metadata.TableKind.Param, start, end, owner);
                };
                TableCompletionReader.prototype._copyDefRange = function (defs, tableKind, start, end, owner) {
                    var table = this._tableStream.tables[tableKind];
                    if (!end && typeof end === "undefined")
                        end = table.length + 1;
                    var setOwner = typeof owner !== 'undefined';
                    for (var i = start - 1; i < end - 1; i++) {
                        var row = table[i];
                        if (setOwner)
                            row.def.owner = owner;
                        defs.push(row.def);
                    }
                };
                TableCompletionReader.prototype.lookupTable = function (tableKind, tableIndex) {
                    if (tableIndex == 0)
                        return null;
                    var table = this._tableStream.tables[tableKind];
                    if (!table)
                        return null;
                    else
                        return table[tableIndex - 1];
                };
                TableCompletionReader.prototype.lookupResolutionScope = function (codedIndex) { return this._codedIndexReaders.resolutionScope.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupTypeDefOrRef = function (codedIndex) { return this._codedIndexReaders.typeDefOrRef.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupHasConstant = function (codedIndex) { return this._codedIndexReaders.hasConstant.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupHasCustomAttribute = function (codedIndex) { return this._codedIndexReaders.hasCustomAttribute.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupCustomAttributeType = function (codedIndex) { return this._codedIndexReaders.customAttributeType.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupHasDeclSecurity = function (codedIndex) { return this._codedIndexReaders.hasDeclSecurity.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupImplementation = function (codedIndex) { return this._codedIndexReaders.implementation.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupHasFieldMarshal = function (codedIndex) { return this._codedIndexReaders.hasFieldMarshal.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupTypeOrMethodDef = function (codedIndex) { return this._codedIndexReaders.typeOrMethodDef.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupMemberForwarded = function (codedIndex) { return this._codedIndexReaders.memberForwarded.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupMemberRefParent = function (codedIndex) { return this._codedIndexReaders.memberRefParent.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupMethodDefOrRef = function (codedIndex) { return this._codedIndexReaders.methodDefOrRef.lookup(codedIndex); };
                TableCompletionReader.prototype.lookupHasSemantics = function (codedIndex) { return this._codedIndexReaders.hasSemantics.lookup(codedIndex); };
                TableCompletionReader.prototype.resolveAssemblyRef = function (name, version, publicKeyOrToken, culture) {
                    return this._appDomain.resolveAssembly(name, version, publicKeyOrToken, culture);
                };
                TableCompletionReader.prototype.resolveTypeRef = function (scope, namespace, name) {
                    if (!(scope instanceof managed.Assembly)) {
                        var type = new managed.Type();
                        type.namespace = namespace;
                        type.name = name;
                        return type;
                    }
                    var asm = scope;
                    for (var i = 0; asm.types.length; i++) {
                        var t = asm.types[i];
                        if (t.name === name && t.namespace === namespace)
                            return t;
                    }
                    var type = new managed.Type();
                    type.namespace = namespace;
                    type.name = name;
                    if (asm.isSpeculative) {
                        asm.types.push(type);
                    }
                    return type;
                };
                TableCompletionReader.prototype.readFieldSignature = function (field, blobIndex) {
                };
                return TableCompletionReader;
            }());
            metadata.TableCompletionReader = TableCompletionReader;
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var TableKind;
            (function (TableKind) {
                TableKind[TableKind["Module"] = 0] = "Module";
                TableKind[TableKind["TypeRef"] = 1] = "TypeRef";
                TableKind[TableKind["TypeDef"] = 2] = "TypeDef";
                TableKind[TableKind["Field"] = 4] = "Field";
                TableKind[TableKind["MethodDef"] = 6] = "MethodDef";
                TableKind[TableKind["Param"] = 8] = "Param";
                TableKind[TableKind["MemberRef"] = 10] = "MemberRef";
                TableKind[TableKind["Constant"] = 11] = "Constant";
                TableKind[TableKind["CustomAttribute"] = 12] = "CustomAttribute";
                TableKind[TableKind["FieldMarshal"] = 13] = "FieldMarshal";
                TableKind[TableKind["DeclSecurity"] = 14] = "DeclSecurity";
                TableKind[TableKind["ClassLayout"] = 15] = "ClassLayout";
                TableKind[TableKind["InterfaceImpl"] = 9] = "InterfaceImpl";
                TableKind[TableKind["FieldLayout"] = 16] = "FieldLayout";
                TableKind[TableKind["StandAloneSig"] = 17] = "StandAloneSig";
                TableKind[TableKind["EventMap"] = 18] = "EventMap";
                TableKind[TableKind["Event"] = 20] = "Event";
                TableKind[TableKind["PropertyMap"] = 21] = "PropertyMap";
                TableKind[TableKind["Property"] = 23] = "Property";
                TableKind[TableKind["MethodSemantics"] = 24] = "MethodSemantics";
                TableKind[TableKind["MethodImpl"] = 25] = "MethodImpl";
                TableKind[TableKind["ModuleRef"] = 26] = "ModuleRef";
                TableKind[TableKind["TypeSpec"] = 27] = "TypeSpec";
                TableKind[TableKind["ImplMap"] = 28] = "ImplMap";
                TableKind[TableKind["FieldRVA"] = 29] = "FieldRVA";
                TableKind[TableKind["Assembly"] = 32] = "Assembly";
                TableKind[TableKind["AssemblyProcessor"] = 33] = "AssemblyProcessor";
                TableKind[TableKind["AssemblyOS"] = 34] = "AssemblyOS";
                TableKind[TableKind["AssemblyRef"] = 35] = "AssemblyRef";
                TableKind[TableKind["AssemblyRefProcessor"] = 36] = "AssemblyRefProcessor";
                TableKind[TableKind["AssemblyRefOS"] = 37] = "AssemblyRefOS";
                TableKind[TableKind["File"] = 38] = "File";
                TableKind[TableKind["ExportedType"] = 39] = "ExportedType";
                TableKind[TableKind["ManifestResource"] = 40] = "ManifestResource";
                TableKind[TableKind["NestedClass"] = 41] = "NestedClass";
                TableKind[TableKind["GenericParam"] = 42] = "GenericParam";
                TableKind[TableKind["MethodSpec"] = 43] = "MethodSpec";
                TableKind[TableKind["GenericParamConstraint"] = 44] = "GenericParamConstraint";
            })(TableKind = metadata.TableKind || (metadata.TableKind = {}));
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var TableReader = (function () {
                function TableReader(_reader, _tables, stringCount, guidCount, blobCount, _codedIndexReaders) {
                    this._reader = _reader;
                    this._tables = _tables;
                    this._codedIndexReaders = _codedIndexReaders;
                    this.stringIndices = [];
                    this.readStringIndex = this._getDirectReader(stringCount);
                    this.readGuid = this._getDirectReader(guidCount);
                    this.readBlobIndex = this._getDirectReader(blobCount);
                    this.readGenericParamTableIndex = this._getTableIndexReader(metadata.TableKind.GenericParam);
                    this.readParamTableIndex = this._getTableIndexReader(metadata.TableKind.Param);
                    this.readFieldTableIndex = this._getTableIndexReader(metadata.TableKind.Field);
                    this.readMethodDefTableIndex = this._getTableIndexReader(metadata.TableKind.MethodDef);
                    this.readTypeDefTableIndex = this._getTableIndexReader(metadata.TableKind.TypeDef);
                    this.readEventTableIndex = this._getTableIndexReader(metadata.TableKind.Event);
                    this.readPropertyTableIndex = this._getTableIndexReader(metadata.TableKind.Property);
                    this.readModuleRefTableIndex = this._getTableIndexReader(metadata.TableKind.ModuleRef);
                    this.readAssemblyTableIndex = this._getTableIndexReader(metadata.TableKind.Assembly);
                }
                TableReader.prototype.readString = function () {
                    var index = this.readStringIndex();
                    this.stringIndices[index] = "";
                    return index;
                };
                TableReader.prototype._getDirectReader = function (spaceSize) {
                    return spaceSize > 65535 ? this.readInt : this.readShort;
                };
                TableReader.prototype._getTableIndexReader = function (tableKind) {
                    var table = this._tables[tableKind];
                    return this._getDirectReader(table ? table.length : 0);
                };
                TableReader.prototype._getCodedIndexReader = function (tables) {
                    var maxTableLength = 0;
                    for (var i = 0; i < tables.length; i++) {
                        var tableIndex = tables[i];
                        var table = this._tables[tableIndex];
                        maxTableLength = Math.max(maxTableLength, table ? table.length : 0);
                    }
                    var tableKindBitCount = metadata.calcRequredBitCount(tables.length - 1);
                    var tableIndexBitCount = metadata.calcRequredBitCount(maxTableLength);
                    var totalBitCount = tableKindBitCount + tableIndexBitCount;
                    return totalBitCount <= 16 ?
                        this.readShort :
                        this.readInt;
                };
                TableReader.prototype.readByte = function () { return this._reader.readByte(); };
                TableReader.prototype.readShort = function () { return this._reader.readShort(); };
                TableReader.prototype.readInt = function () { return this._reader.readInt(); };
                TableReader.prototype.readResolutionScope = function () { return this._codedIndexReaders.resolutionScope.readCodedIndex(this._reader); };
                TableReader.prototype.readTypeDefOrRef = function () { return this._codedIndexReaders.typeDefOrRef.readCodedIndex(this._reader); };
                TableReader.prototype.readHasConstant = function () { return this._codedIndexReaders.hasConstant.readCodedIndex(this._reader); };
                TableReader.prototype.readHasCustomAttribute = function () { return this._codedIndexReaders.hasCustomAttribute.readCodedIndex(this._reader); };
                TableReader.prototype.readCustomAttributeType = function () { return this._codedIndexReaders.customAttributeType.readCodedIndex(this._reader); };
                TableReader.prototype.readHasDeclSecurity = function () { return this._codedIndexReaders.hasDeclSecurity.readCodedIndex(this._reader); };
                TableReader.prototype.readImplementation = function () { return this._codedIndexReaders.implementation.readCodedIndex(this._reader); };
                TableReader.prototype.readHasFieldMarshal = function () { return this._codedIndexReaders.hasFieldMarshal.readCodedIndex(this._reader); };
                TableReader.prototype.readTypeOrMethodDef = function () { return this._codedIndexReaders.typeOrMethodDef.readCodedIndex(this._reader); };
                TableReader.prototype.readMemberForwarded = function () { return this._codedIndexReaders.memberForwarded.readCodedIndex(this._reader); };
                TableReader.prototype.readMemberRefParent = function () { return this._codedIndexReaders.memberRefParent.readCodedIndex(this._reader); };
                TableReader.prototype.readMethodDefOrRef = function () { return this._codedIndexReaders.methodDefOrRef.readCodedIndex(this._reader); };
                TableReader.prototype.readHasSemantics = function () { return this._codedIndexReaders.hasSemantics.readCodedIndex(this._reader); };
                return TableReader;
            }());
            metadata.TableReader = TableReader;
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            var TableStream = (function () {
                function TableStream() {
                    this.reserved0 = 0;
                    this.version = "";
                    this.heapSizes = 0;
                    this.reserved1 = 0;
                    this.tables = [];
                    this.stringIndices = [];
                    this.codedIndexReaders = null;
                }
                TableStream.prototype.read = function (reader, stringCount, guidCount, blobCount) {
                    this.reserved0 = reader.readInt();
                    this.version = reader.readByte() + "." + reader.readByte();
                    this.heapSizes = reader.readByte();
                    this.reserved1 = reader.readByte();
                    var valid = reader.readLong();
                    var sorted = reader.readLong();
                    var tableCounts = this._readTableRowCounts(valid, reader);
                    this._populateTableRows(tableCounts);
                    this.codedIndexReaders = new metadata.CodedIndexReaders(this.tables);
                    var tableReader = new metadata.TableReader(reader, this.tables, stringCount, guidCount, blobCount, this.codedIndexReaders);
                    this._readTableRows(tableCounts, tableReader);
                    this.stringIndices = tableReader.stringIndices;
                };
                TableStream.prototype._readTableRowCounts = function (valid, tableReader) {
                    var tableCounts = [];
                    var bits = valid.lo;
                    for (var tableIndex = 0; tableIndex < 32; tableIndex++) {
                        if (bits & 1) {
                            var rowCount = tableReader.readInt();
                            tableCounts[tableIndex] = rowCount;
                        }
                        bits = bits >> 1;
                    }
                    bits = valid.hi;
                    for (var i = 0; i < 32; i++) {
                        var tableIndex = i + 32;
                        if (bits & 1) {
                            var rowCount = tableReader.readInt();
                            tableCounts[tableIndex] = rowCount;
                        }
                        bits = bits >> 1;
                    }
                    return tableCounts;
                };
                TableStream.prototype._populateTableObjects = function (table, Ctor, count) {
                    for (var i = 0; i < count; i++) {
                        table.push(new Ctor());
                    }
                };
                TableStream.prototype._populateTableRows = function (tableCounts) {
                    for (var i = 0; i < tableCounts.length; i++) {
                        var table = [];
                        this.tables[i] = table;
                        var tableName = metadata.TableKind[i];
                        var TableType = managed.tables[tableName];
                        if (typeof (TableType) === "undefined") {
                            if (tableCounts[i])
                                throw new Error("Table 0x" + i.toString(16).toUpperCase() + " has " + tableCounts[i] + " rows but no definition.");
                            continue;
                        }
                        this._populateTableObjects(table, TableType, tableCounts[i]);
                    }
                };
                TableStream.prototype._readTableRows = function (tableCounts, reader) {
                    for (var i = 0; i < tableCounts.length; i++) {
                        var table = this.tables[i];
                        var tableName = metadata.TableKind[i];
                        var TableType = managed.tables[tableName];
                        for (var iRow = 0; iRow < tableCounts[i]; iRow++) {
                            table[iRow].read(reader);
                        }
                    }
                };
                return TableStream;
            }());
            metadata.TableStream = TableStream;
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var metadata;
        (function (metadata) {
            function calcRequredBitCount(maxValue) {
                var bitMask = maxValue;
                var result = 0;
                while (bitMask != 0) {
                    result++;
                    bitMask >>= 1;
                }
                return result;
            }
            metadata.calcRequredBitCount = calcRequredBitCount;
        })(metadata = managed.metadata || (managed.metadata = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var Assembly = (function () {
                function Assembly() {
                    this.def = null;
                    this.hashAlgId = 0;
                    this.majorVersion = 0;
                    this.minorVersion = 0;
                    this.buildNumber = 0;
                    this.revisionNumber = 0;
                    this.flags = 0;
                    this.publicKey = 0;
                    this.name = 0;
                    this.culture = 0;
                }
                Assembly.prototype.read = function (reader) {
                    this.hashAlgId = reader.readInt();
                    this.majorVersion = reader.readShort();
                    this.minorVersion = reader.readShort();
                    this.buildNumber = reader.readShort();
                    this.revisionNumber = reader.readShort();
                    this.flags = reader.readInt();
                    this.publicKey = reader.readBlobIndex();
                    this.name = reader.readString();
                    this.culture = reader.readString();
                };
                Assembly.prototype.precomplete = function (reader) {
                    var name = reader.readString(this.name);
                    var culture = reader.readString(this.culture);
                    var version = this.majorVersion + '.' + this.minorVersion + '.' + this.buildNumber + '.' + this.revisionNumber;
                    var pk = reader.readPublicKey(this.publicKey);
                    var pktoken = pk && pk.length ? this._hashPublicKey(pk) : null;
                    this.def = reader.resolveAssemblyRef(name, version, pktoken, culture);
                    this.def.isSpeculative = false;
                    this.def.name = name;
                    this.def.version = version;
                    this.def.publicKey = pk;
                    this.def.publicKeyToken = pktoken;
                };
                Assembly.prototype._hashPublicKey = function (pk) {
                    var algo;
                    switch (this.hashAlgId) {
                        case pe.managed.metadata.AssemblyHashAlgorithm.MD5:
                            if (typeof console !== 'undefined' && console && typeof console.error === 'function')
                                console.error('Assembly hashing using MD5 is not currently supported');
                            break;
                        case pe.managed.metadata.AssemblyHashAlgorithm.SHA1:
                            algo = 'SHA-1';
                            break;
                        case pe.managed.metadata.AssemblyHashAlgorithm.SHA384:
                            algo = 'SHA-384';
                            break;
                        case pe.managed.metadata.AssemblyHashAlgorithm.SHA512:
                            algo = 'SHA-512';
                            break;
                        case pe.managed.metadata.AssemblyHashAlgorithm.None:
                            break;
                        default:
                            throw new Error('Assembly hashing using unknown ' + this.hashAlgId + ' algorithm is not supported.');
                    }
                    if (algo) {
                        var bytes = '';
                        for (var i = 0; i < pk.length; i++) {
                            bytes += String.fromCharCode(pk[i]);
                        }
                        var shaObj = new jsSHA(algo, 'BYTES');
                        shaObj.update(bytes);
                        var hash = shaObj.getHash('BYTES');
                        var result = "";
                        for (var i = 0; i < hash.length && i < 8; i++) {
                            var hex = hash.charCodeAt(hash.length - i - 1).toString(16);
                            if (hex.length == 1)
                                result += "0";
                            result += hex;
                        }
                        return result;
                    }
                    else {
                        hash = pk;
                        var result = "";
                        for (var i = 0; i < hash.length; i++) {
                            var hex = hash[i].toString(16);
                            if (hex.length == 1)
                                result += "0";
                            result += hex;
                        }
                        return result;
                    }
                };
                return Assembly;
            }());
            tables.Assembly = Assembly;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var AssemblyOS = (function () {
                function AssemblyOS() {
                    this.TableKind = 0x22;
                    this.osPlatformId = 0;
                    this.osMajorVersion = 0;
                    this.osMinorVersion = 0;
                }
                AssemblyOS.prototype.read = function (reader) {
                    this.osPlatformId = reader.readInt();
                    this.osMajorVersion = reader.readShort();
                    this.osMinorVersion = reader.readShort();
                };
                return AssemblyOS;
            }());
            tables.AssemblyOS = AssemblyOS;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var AssemblyProcessor = (function () {
                function AssemblyProcessor() {
                    this.TableKind = 0x21;
                    this.processor = 0;
                }
                AssemblyProcessor.prototype.reader = function (reader) {
                    this.processor = reader.readInt();
                };
                return AssemblyProcessor;
            }());
            tables.AssemblyProcessor = AssemblyProcessor;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var AssemblyRef = (function () {
                function AssemblyRef() {
                    this.def = null;
                    this.majorVersion = 0;
                    this.minorVersion = 0;
                    this.buildNumber = 0;
                    this.revisionNumber = 0;
                    this.flags = 0;
                    this.publicKeyOrToken = 0;
                    this.name = 0;
                    this.culture = 0;
                    this.hashValue = 0;
                }
                AssemblyRef.prototype.read = function (reader) {
                    this.majorVersion = reader.readShort();
                    this.minorVersion = reader.readShort();
                    this.buildNumber = reader.readShort();
                    this.revisionNumber = reader.readShort();
                    this.flags = reader.readInt();
                    this.publicKeyOrToken = reader.readBlobIndex();
                    this.name = reader.readString();
                    this.culture = reader.readString();
                    this.hashValue = reader.readBlobIndex();
                };
                AssemblyRef.prototype.precomplete = function (reader) {
                    var name = reader.readString(this.name);
                    var culture = reader.readString(this.culture);
                    var version = this.majorVersion + '.' + this.minorVersion + '.' + this.buildNumber + '.' + this.revisionNumber;
                    var pk = null;
                    this.def = reader.resolveAssemblyRef(name, version, pk, culture);
                };
                return AssemblyRef;
            }());
            tables.AssemblyRef = AssemblyRef;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var AssemblyRefOs = (function () {
                function AssemblyRefOs() {
                    this.TableKind = 0x25;
                    this.osPlatformId = 0;
                    this.osMajorVersion = 0;
                    this.osMinorVersion = 0;
                    this.assemblyRef = 0;
                }
                AssemblyRefOs.prototype.read = function (reader) {
                    this.osPlatformId = reader.readInt();
                    this.osMajorVersion = reader.readInt();
                    this.osMinorVersion = reader.readInt();
                    this.assemblyRef = reader.readAssemblyTableIndex();
                };
                return AssemblyRefOs;
            }());
            tables.AssemblyRefOs = AssemblyRefOs;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var AssemblyRefProcessor = (function () {
                function AssemblyRefProcessor() {
                    this.TableKind = 0x24;
                }
                AssemblyRefProcessor.prototype.read = function (reader) {
                    this.processor = reader.readInt();
                };
                return AssemblyRefProcessor;
            }());
            tables.AssemblyRefProcessor = AssemblyRefProcessor;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var ClassLayout = (function () {
                function ClassLayout() {
                    this.TableKind = 0x0F;
                    this.packingSize = 0;
                    this.classSize = 0;
                    this.parent = 0;
                }
                ClassLayout.prototype.read = function (reader) {
                    this.packingSize = reader.readShort();
                    this.classSize = reader.readInt();
                    this.parent = reader.readTypeDefTableIndex();
                };
                ClassLayout.prototype.complete = function (reader) {
                    var typeDef = reader.lookupTable(managed.metadata.TableKind.TypeDef, this.parent);
                    if (typeDef)
                        typeDef.def.layout = { packingSize: this.packingSize, classSize: this.classSize };
                };
                return ClassLayout;
            }());
            tables.ClassLayout = ClassLayout;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var Constant = (function () {
                function Constant() {
                    this.TableKind = 0x0B;
                    this.type = 0;
                    this.parent = 0;
                    this.value = 0;
                }
                Constant.prototype.read = function (reader) {
                    this.type = reader.readByte();
                    var padding = reader.readByte();
                    this.parent = reader.readHasConstant();
                    this.value = reader.readBlobIndex();
                };
                Constant.prototype.complete = function (reader) {
                    var parentDef = reader.lookupHasConstant(this.parent);
                };
                return Constant;
            }());
            tables.Constant = Constant;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var CustomAttribute = (function () {
                function CustomAttribute() {
                    this.TableKind = 0x0C;
                    this.parent = 0;
                    this.type = 0;
                    this.value = 0;
                }
                CustomAttribute.prototype.read = function (reader) {
                    this.parent = reader.readHasCustomAttribute();
                    this.type = reader.readCustomAttributeType();
                    this.value = reader.readBlobIndex();
                };
                CustomAttribute.prototype.complete = function (reader) {
                    var attrParent = reader.lookupHasCustomAttribute(this.parent);
                    var attrCtor = reader.lookupCustomAttributeType(this.type);
                    if (attrParent && attrCtor) {
                        if (!attrParent.customAttributes)
                            attrParent.customAttributes = [];
                        attrParent.customAttributes.push(attrCtor);
                    }
                };
                CustomAttribute.fire = true;
                return CustomAttribute;
            }());
            tables.CustomAttribute = CustomAttribute;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var DeclSecurity = (function () {
                function DeclSecurity() {
                    this.action = 0;
                    this.parent = 0;
                    this.permissionSet = 0;
                }
                DeclSecurity.prototype.read = function (reader) {
                    this.action = reader.readShort();
                    this.parent = reader.readHasDeclSecurity();
                    this.permissionSet = reader.readBlobIndex();
                };
                DeclSecurity.prototype.complete = function (reader) {
                    var declSecurityParent = reader.lookupHasCustomAttribute(this.parent);
                    if (declSecurityParent) {
                        var declSecurityParentDef = declSecurityParent.def;
                    }
                };
                return DeclSecurity;
            }());
            tables.DeclSecurity = DeclSecurity;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var Event = (function () {
                function Event() {
                    this.def = new managed.EventInfo();
                    this.eventFlags = 0;
                    this.name = 0;
                    this.eventType = 0;
                }
                Event.prototype.read = function (reader) {
                    this.eventFlags = reader.readShort();
                    this.name = reader.readString();
                    this.eventType = reader.readTypeDefOrRef();
                };
                Event.prototype.complete = function (reader) {
                    var type = reader.lookupTypeDefOrRef(this.eventType);
                    this.def.eventType = type;
                };
                return Event;
            }());
            tables.Event = Event;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var EventMap = (function () {
                function EventMap() {
                    this.parent = 0;
                    this.eventList = 0;
                }
                EventMap.prototype.read = function (reader) {
                    this.parent = reader.readTypeDefTableIndex();
                    this.eventList = reader.readEventTableIndex();
                };
                EventMap.prototype.complete = function (reader) {
                    var type = reader.lookupTable(managed.metadata.TableKind.TypeDef, this.parent);
                    var event = reader.lookupTable(managed.metadata.TableKind.Event, this.eventList);
                    if (type && event)
                        type.def.events.push(event.def);
                };
                return EventMap;
            }());
            tables.EventMap = EventMap;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var ExportedType = (function () {
                function ExportedType() {
                    this.flags = 0;
                    this.typeDefId = 0;
                    this.typeName = 0;
                    this.typeNamespace = 0;
                    this.implementation = 0;
                }
                ExportedType.prototype.read = function (reader) {
                    this.flags = reader.readInt();
                    this.typeDefId = reader.readInt();
                    this.typeName = reader.readString();
                    this.typeNamespace = reader.readString();
                    this.implementation = reader.readImplementation();
                };
                ExportedType.prototype.complete = function (reader) {
                    var impl = reader.lookupImplementation(this.implementation);
                };
                return ExportedType;
            }());
            tables.ExportedType = ExportedType;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var Field = (function () {
                function Field() {
                    this.def = new managed.FieldInfo();
                    this.name = 0;
                    this.signature = 0;
                }
                Field.prototype.read = function (reader) {
                    this.def.attributes = reader.readShort();
                    this.name = reader.readString();
                    this.signature = reader.readBlobIndex();
                };
                Field.prototype.complete = function (reader) {
                    this.def.name = reader.readString(this.name);
                    reader.readFieldSignature(this.def, this.signature);
                };
                return Field;
            }());
            tables.Field = Field;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var FieldLayout = (function () {
                function FieldLayout() {
                    this.TableKind = 0x10;
                    this.offset = 0;
                    this.field = 0;
                }
                FieldLayout.prototype.read = function (reader) {
                    this.offset = reader.readInt();
                    this.field = reader.readFieldTableIndex();
                };
                FieldLayout.prototype.complete = function (reader) {
                    var field = reader.lookupTable(managed.metadata.TableKind.Field, this.field);
                    if (field)
                        field.fieldOffset = this.offset;
                };
                return FieldLayout;
            }());
            tables.FieldLayout = FieldLayout;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var FieldMarshal = (function () {
                function FieldMarshal() {
                    this.TableKind = 0x0D;
                    this.parent = 0;
                    this.nativeType = 0;
                }
                FieldMarshal.prototype.read = function (reader) {
                    this.parent = reader.readHasFieldMarshal();
                    this.nativeType = reader.readBlobIndex();
                };
                FieldMarshal.prototype.complete = function (reader) {
                    var parent = reader.lookupHasFieldMarshal(this.parent);
                };
                return FieldMarshal;
            }());
            tables.FieldMarshal = FieldMarshal;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var FieldRVA = (function () {
                function FieldRVA() {
                    this.TableKind = 0x1D;
                    this.rva = 0;
                    this.field = 0;
                }
                FieldRVA.prototype.read = function (reader) {
                    this.rva = reader.readInt();
                    this.field = reader.readFieldTableIndex();
                };
                FieldRVA.prototype.complete = function (reader) {
                    var field = reader.lookupTable(managed.metadata.TableKind.Field, this.field);
                };
                return FieldRVA;
            }());
            tables.FieldRVA = FieldRVA;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var File = (function () {
                function File() {
                    this.TableKind = 0x26;
                    this.flags = 0;
                    this.name = 0;
                    this.hashValue = 0;
                }
                File.prototype.read = function (reader) {
                    this.flags = reader.readInt();
                    this.name = reader.readString();
                    this.hashValue = reader.readBlobIndex();
                };
                return File;
            }());
            tables.File = File;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var GenericParam = (function () {
                function GenericParam() {
                    this.TableKind = 0x2A;
                    this.def = new managed.Type();
                    this.number_ = 0;
                    this.owner = 0;
                    this.name = 0;
                }
                GenericParam.prototype.read = function (reader) {
                    this.number_ = reader.readShort();
                    this.def.attributes = reader.readShort();
                    this.owner = reader.readTypeOrMethodDef();
                    this.name = reader.readString();
                };
                GenericParam.prototype.complete = function (reader) {
                    this.def.genericPrototype = reader.lookupTypeDefOrRef(this.owner);
                    this.def.name = reader.readString(this.name);
                    if (this.def.genericPrototype && this.def.genericPrototype.genericArguments) {
                        this.def.genericPrototype.genericArguments[this.number_] = this.def;
                    }
                };
                return GenericParam;
            }());
            tables.GenericParam = GenericParam;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var GenericParamConstraint = (function () {
                function GenericParamConstraint() {
                    this.owner = 0;
                    this.constraint = 0;
                }
                GenericParamConstraint.prototype.read = function (reader) {
                    this.owner = reader.readGenericParamTableIndex();
                    this.constraint = reader.readTypeDefOrRef();
                };
                GenericParamConstraint.prototype.complete = function (reader) {
                    var genericParam = reader.lookupTable(managed.metadata.TableKind.GenericParam, this.owner);
                    var constrType = reader.lookupTypeDefOrRef(this.constraint);
                };
                return GenericParamConstraint;
            }());
            tables.GenericParamConstraint = GenericParamConstraint;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var ImplMap = (function () {
                function ImplMap() {
                    this.TableKind = 0x1C;
                    this.mappingFlags = 0;
                    this.memberForwarded = 0;
                    this.importName = 0;
                    this.importScope = 0;
                }
                ImplMap.prototype.read = function (reader) {
                    this.mappingFlags = reader.readShort();
                    this.memberForwarded = reader.readMemberForwarded();
                    this.importName = reader.readString();
                    this.importScope = reader.readModuleRefTableIndex();
                };
                ImplMap.prototype.complete = function (reader) {
                    var forwarded = reader.lookupMemberForwarded(this.memberForwarded);
                    var moduleRef = reader.lookupTable(managed.metadata.TableKind.ModuleRef, this.importScope);
                };
                return ImplMap;
            }());
            tables.ImplMap = ImplMap;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var InterfaceImpl = (function () {
                function InterfaceImpl() {
                    this.class_ = 0;
                    this.interface_ = 0;
                }
                InterfaceImpl.prototype.read = function (reader) {
                    this.class_ = reader.readTypeDefTableIndex();
                    this.interface_ = reader.readTypeDefOrRef();
                };
                InterfaceImpl.prototype.complete = function (reader) {
                    var class_ = reader.lookupTable(managed.metadata.TableKind.TypeDef, this.class_);
                    var interface_ = reader.lookupTypeDefOrRef(this.interface_);
                    if (class_ && interface_ && class_.def) {
                        var type = class_.def;
                        type.interfaces.push(interface_);
                    }
                };
                return InterfaceImpl;
            }());
            tables.InterfaceImpl = InterfaceImpl;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var ManifestResource = (function () {
                function ManifestResource() {
                    this.offset = 0;
                    this.flags = 0;
                    this.name = 0;
                    this.implementation = 0;
                }
                ManifestResource.prototype.read = function (reader) {
                    this.offset = reader.readInt();
                    this.flags = reader.readInt();
                    this.name = reader.readString();
                    this.implementation = reader.readImplementation();
                };
                ManifestResource.prototype.complete = function (reader) {
                    var implementation = reader.lookupImplementation(this.implementation);
                };
                return ManifestResource;
            }());
            tables.ManifestResource = ManifestResource;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var MemberRef = (function () {
                function MemberRef() {
                    this.TableKind = 0x0A;
                    this.def = null;
                    this.class_ = 0;
                    this.name = 0;
                    this.signature = 0;
                }
                MemberRef.prototype.read = function (reader) {
                    this.class_ = reader.readMemberRefParent();
                    this.name = reader.readString();
                    this.signature = reader.readBlobIndex();
                };
                MemberRef.prototype.complete = function (reader) {
                    var name = reader.readString(this.name);
                    var class_ = reader.lookupImplementation(this.class_);
                };
                return MemberRef;
            }());
            tables.MemberRef = MemberRef;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var MethodDef = (function () {
                function MethodDef() {
                    this.def = new managed.MethodInfo();
                    this.rva = 0;
                    this.implAttributes = 0;
                    this.attributes = 0;
                    this.name = 0;
                    this.signature = 0;
                    this.paramList = 0;
                }
                MethodDef.prototype.read = function (reader) {
                    this.rva = reader.readInt();
                    this.implAttributes = reader.readShort();
                    this.attributes = reader.readShort();
                    this.name = reader.readString();
                    this.signature = reader.readBlobIndex();
                    this.paramList = reader.readParamTableIndex();
                };
                MethodDef.prototype.complete = function (reader, nextMethodDef) {
                    this.def.attributes = this.attributes;
                    this.def.name = reader.readString(this.name);
                    var nextParamList;
                    if (nextMethodDef)
                        nextParamList = nextMethodDef.paramList;
                    reader.copyParamRange(this.def.parameters, this.paramList, nextParamList, this.def);
                };
                return MethodDef;
            }());
            tables.MethodDef = MethodDef;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var MethodImpl = (function () {
                function MethodImpl() {
                    this.TableKind = 0x19;
                    this.class_ = 0;
                    this.methodBody = 0;
                    this.methodDeclaration = 0;
                }
                MethodImpl.prototype.read = function (reader) {
                    this.class_ = reader.readTypeDefTableIndex();
                    this.methodBody = reader.readMethodDefOrRef();
                    this.methodDeclaration = reader.readMethodDefOrRef();
                };
                MethodImpl.prototype.complete = function (reader) {
                    var class_ = reader.lookupTable(managed.metadata.TableKind.TypeDef, this.class_);
                    var methodBody = reader.lookupMethodDefOrRef(this.methodBody);
                    var methodDeclaration = reader.lookupMethodDefOrRef(this.methodDeclaration);
                    if (class_ && class_.def) {
                        var type = class_.def;
                    }
                };
                return MethodImpl;
            }());
            tables.MethodImpl = MethodImpl;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var MethodSemantics = (function () {
                function MethodSemantics() {
                    this.TableKind = 0x18;
                    this.semantics = 0;
                    this.method = 0;
                    this.association = 0;
                }
                MethodSemantics.prototype.read = function (reader) {
                    this.semantics = reader.readShort();
                    this.method = reader.readMethodDefTableIndex();
                    this.association = reader.readHasSemantics();
                };
                MethodSemantics.prototype.complete = function (reader) {
                    var method = reader.lookupTable(managed.metadata.TableKind.MethodDef, this.method);
                    var associatio = reader.lookupHasSemantics(this.association);
                    if (method && method.def) {
                    }
                };
                return MethodSemantics;
            }());
            tables.MethodSemantics = MethodSemantics;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var MethodSpec = (function () {
                function MethodSpec() {
                    this.method = 0;
                    this.instantiation = 0;
                }
                MethodSpec.prototype.read = function (reader) {
                    this.method = reader.readMethodDefOrRef();
                    this.instantiation = reader.readBlobIndex();
                };
                MethodSpec.prototype.complete = function (reader) {
                    var method = reader.lookupMethodDefOrRef(this.method);
                };
                return MethodSpec;
            }());
            tables.MethodSpec = MethodSpec;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var Module = (function () {
                function Module() {
                    this.def = { generation: 0, moduleName: '', mvid: '', encId: '', encBaseId: '' };
                    this.name = 0;
                    this.mvid = 0;
                    this.encId = 0;
                    this.encBaseId = 0;
                }
                Module.prototype.read = function (reader) {
                    this.def.generation = reader.readShort();
                    this.name = reader.readString();
                    this.mvid = reader.readGuid();
                    this.encId = reader.readGuid();
                    this.encBaseId = reader.readGuid();
                };
                Module.prototype.complete = function (reader) {
                    this.def.moduleName = reader.readString(this.name);
                    this.def.mvid = reader.readGuid(this.mvid);
                    this.def.encId = reader.readGuid(this.encId);
                    this.def.encBaseId = reader.readGuid(this.encBaseId);
                };
                return Module;
            }());
            tables.Module = Module;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var ModuleRef = (function () {
                function ModuleRef() {
                    this.name = 0;
                }
                ModuleRef.prototype.read = function (reader) {
                    this.name = reader.readString();
                };
                ModuleRef.prototype.complete = function (reader) {
                    var name = reader.readString(this.name);
                };
                return ModuleRef;
            }());
            tables.ModuleRef = ModuleRef;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var NestedClass = (function () {
                function NestedClass() {
                    this.nestedClass = 0;
                    this.enclosingClass = 0;
                }
                NestedClass.prototype.read = function (reader) {
                    this.nestedClass = reader.readTypeDefTableIndex();
                    this.enclosingClass = reader.readTypeDefTableIndex();
                };
                NestedClass.prototype.complete = function (reader) {
                    var nestedClass = reader.lookupTable(managed.metadata.TableKind.TypeDef, this.nestedClass);
                    var enclosingClass = reader.lookupTable(managed.metadata.TableKind.TypeDef, this.enclosingClass);
                    if (nestedClass.def && enclosingClass.def) {
                        nestedClass.def.nestingParent = enclosingClass.def;
                        enclosingClass.def.netedTypes.push(nestedClass.def);
                    }
                };
                return NestedClass;
            }());
            tables.NestedClass = NestedClass;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var Param = (function () {
                function Param() {
                    this.def = new managed.ParameterInfo();
                    this.sequence = 0;
                    this.name = 0;
                }
                Param.prototype.read = function (reader) {
                    this.def.attributes = reader.readShort();
                    this.sequence = reader.readShort();
                    this.name = reader.readString();
                };
                Param.prototype.complete = function (reader) {
                    this.def.name = reader.readString(this.name);
                };
                return Param;
            }());
            tables.Param = Param;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var Property = (function () {
                function Property() {
                    this.def = new managed.PropertyInfo();
                    this.name = 0;
                    this.type = 0;
                }
                Property.prototype.read = function (reader) {
                    this.def.attributes = reader.readShort();
                    this.name = reader.readString();
                    this.type = reader.readBlobIndex();
                };
                Property.prototype.complete = function (reader) {
                    this.def.name = reader.readString(this.name);
                };
                return Property;
            }());
            tables.Property = Property;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var PropertyMap = (function () {
                function PropertyMap() {
                    this.parent = 0;
                    this.propertyList = 0;
                }
                PropertyMap.prototype.read = function (reader) {
                    this.parent = reader.readTypeDefTableIndex();
                    this.propertyList = reader.readPropertyTableIndex();
                };
                PropertyMap.prototype.complete = function (reader) {
                    var parent = reader.lookupTable(managed.metadata.TableKind.TypeDef, this.parent);
                    var property = reader.lookupTable(managed.metadata.TableKind.Property, this.propertyList);
                };
                return PropertyMap;
            }());
            tables.PropertyMap = PropertyMap;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var StandAloneSig = (function () {
                function StandAloneSig() {
                    this.signature = 0;
                }
                StandAloneSig.prototype.read = function (reader) {
                    this.signature = reader.readBlobIndex();
                };
                return StandAloneSig;
            }());
            tables.StandAloneSig = StandAloneSig;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var TypeDef = (function () {
                function TypeDef() {
                    this.def = new managed.Type();
                    this.name = 0;
                    this.namespace = 0;
                    this.extends_ = 0;
                    this.fieldList = 0;
                    this.methodList = 0;
                    this.def.isSpeculative = false;
                }
                TypeDef.prototype.read = function (reader) {
                    this.def.attributes = reader.readInt();
                    this.name = reader.readString();
                    this.namespace = reader.readString();
                    this.extends_ = reader.readTypeDefOrRef();
                    this.fieldList = reader.readFieldTableIndex();
                    this.methodList = reader.readMethodDefTableIndex();
                };
                TypeDef.prototype.complete = function (reader, nextTypeDef) {
                    this.def.name = reader.readString(this.name);
                    this.def.namespace = reader.readString(this.namespace);
                    this.def.baseType = reader.lookupTypeDefOrRef(this.extends_);
                    var nextFieldList;
                    if (nextTypeDef)
                        nextFieldList = nextTypeDef.fieldList;
                    reader.copyFieldRange(this.def.fields, this.fieldList, nextFieldList, this.def);
                    var nextMethodList;
                    if (nextTypeDef)
                        nextMethodList = nextTypeDef.methodList;
                    reader.copyMethodRange(this.def.methods, this.methodList, nextMethodList, this.def);
                };
                return TypeDef;
            }());
            tables.TypeDef = TypeDef;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var TypeRef = (function () {
                function TypeRef() {
                    this.def = null;
                    this.resolutionScope = 0;
                    this.name = 0;
                    this.namespace = 0;
                }
                TypeRef.prototype.read = function (reader) {
                    this.resolutionScope = reader.readResolutionScope();
                    this.name = reader.readString();
                    this.namespace = reader.readString();
                };
                TypeRef.prototype.precomplete = function (reader) {
                    var scope = reader.lookupResolutionScope(this.resolutionScope);
                    var name = reader.readString(this.name);
                    var namespace = reader.readString(this.namespace);
                    this.def = reader.resolveTypeRef(scope, namespace, name);
                };
                return TypeRef;
            }());
            tables.TypeRef = TypeRef;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var managed;
    (function (managed) {
        var tables;
        (function (tables) {
            var TypeSpec = (function () {
                function TypeSpec() {
                    this.def = new managed.Type();
                    this.signature = 0;
                }
                TypeSpec.prototype.read = function (reader) {
                    this.signature = reader.readBlobIndex();
                    var fakeType = new managed.Type();
                    fakeType.name = 'fake*' + this.signature + '*';
                    this.def.genericPrototype = fakeType;
                };
                TypeSpec.prototype.complete = function (reader) {
                };
                return TypeSpec;
            }());
            tables.TypeSpec = TypeSpec;
        })(tables = managed.tables || (managed.tables = {}));
    })(managed = pe.managed || (pe.managed = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var unmanaged;
    (function (unmanaged) {
        var DllExport = (function () {
            function DllExport() {
            }
            DllExport.readExports = function (reader, range) {
                var result = [];
                result.flags = reader.readInt();
                if (!result.timestamp)
                    result.timestamp = new Date(0);
                result.timestamp.setTime(reader.readInt() * 1000);
                var majorVersion = reader.readShort();
                var minorVersion = reader.readShort();
                result.version = majorVersion + "." + minorVersion;
                var nameRva = reader.readInt();
                result.ordinalBase = reader.readInt();
                var addressTableEntries = reader.readInt();
                var numberOfNamePointers = reader.readInt();
                var exportAddressTableRva = reader.readInt();
                var namePointerRva = reader.readInt();
                var ordinalTableRva = reader.readInt();
                if (nameRva == 0) {
                    result.dllName = null;
                }
                else {
                    var saveOffset = reader.offset;
                    reader.setVirtualOffset(nameRva);
                    result.dllName = reader.readAsciiZ();
                    reader.offset = saveOffset;
                }
                result.length = addressTableEntries;
                for (var i = 0; i < addressTableEntries; i++) {
                    var exportEntry = new DllExport();
                    exportEntry.readExportEntry(reader, range);
                    exportEntry.ordinal = i + result.ordinalBase;
                    result[i] = exportEntry;
                }
                if (numberOfNamePointers != 0
                    && namePointerRva != 0
                    && ordinalTableRva != 0) {
                    saveOffset = reader.offset;
                    for (var i = 0; i < numberOfNamePointers; i++) {
                        reader.setVirtualOffset(ordinalTableRva + 2 * i);
                        var ordinal = reader.readShort();
                        reader.setVirtualOffset(namePointerRva + 4 * i);
                        var functionNameRva = reader.readInt();
                        var functionName;
                        if (functionNameRva == 0) {
                            functionName = null;
                        }
                        else {
                            reader.setVirtualOffset(functionNameRva);
                            functionName = reader.readAsciiZ();
                        }
                        result[ordinal].name = functionName;
                    }
                    reader.offset = saveOffset;
                }
                return result;
            };
            DllExport.prototype.readExportEntry = function (reader, range) {
                var exportOrForwarderRva = reader.readInt();
                if (range.mapRelative(exportOrForwarderRva) >= 0) {
                    this.exportRva = 0;
                    var forwarderRva = reader.readInt();
                    if (forwarderRva == 0) {
                        this.forwarder = null;
                    }
                    else {
                        var saveOffset = reader.offset;
                        reader.setVirtualOffset(forwarderRva);
                        this.forwarder = reader.readAsciiZ();
                        reader.offset = saveOffset;
                    }
                }
                else {
                    this.exportRva = reader.readInt();
                    this.forwarder = null;
                }
                this.name = null;
            };
            return DllExport;
        }());
        unmanaged.DllExport = DllExport;
    })(unmanaged = pe.unmanaged || (pe.unmanaged = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var unmanaged;
    (function (unmanaged) {
        var DllImport = (function () {
            function DllImport() {
                this.name = "";
                this.ordinal = 0;
                this.dllName = "";
                this.timeDateStamp = new Date(0);
            }
            DllImport.read = function (reader, result) {
                if (!result)
                    result = [];
                var readLength = 0;
                while (true) {
                    var originalFirstThunk = reader.readInt();
                    var timeDateStamp = new Date(0);
                    timeDateStamp.setTime(reader.readInt());
                    var forwarderChain = reader.readInt();
                    var nameRva = reader.readInt();
                    var firstThunk = reader.readInt();
                    var thunkAddressPosition = originalFirstThunk == 0 ? firstThunk : originalFirstThunk;
                    if (thunkAddressPosition == 0)
                        break;
                    var saveOffset = reader.offset;
                    var libraryName;
                    if (nameRva === 0) {
                        libraryName = null;
                    }
                    else {
                        reader.setVirtualOffset(nameRva);
                        libraryName = reader.readAsciiZ();
                    }
                    reader.setVirtualOffset(thunkAddressPosition);
                    while (true) {
                        var newEntry = result[readLength];
                        if (!newEntry) {
                            newEntry = new DllImport();
                            result[readLength] = newEntry;
                        }
                        if (!newEntry.readEntry(reader))
                            break;
                        newEntry.dllName = libraryName;
                        newEntry.timeDateStamp = timeDateStamp;
                        readLength++;
                    }
                    reader.offset = saveOffset;
                }
                result.length = readLength;
                return result;
            };
            DllImport.prototype.readEntry = function (reader) {
                var importPosition = reader.readInt();
                if (importPosition == 0)
                    return false;
                if (importPosition & (1 << 31)) {
                    this.ordinal = importPosition & 0x7FFFFFFF;
                    this.name = null;
                }
                else {
                    var saveOffset = reader.offset;
                    reader.setVirtualOffset(importPosition);
                    var hint = reader.readShort();
                    var fname = reader.readAsciiZ();
                    this.ordinal = hint;
                    this.name = fname;
                    reader.offset = saveOffset;
                }
                return true;
            };
            return DllImport;
        }());
        unmanaged.DllImport = DllImport;
    })(unmanaged = pe.unmanaged || (pe.unmanaged = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var unmanaged;
    (function (unmanaged) {
        var ResourceDataEntry = (function () {
            function ResourceDataEntry() {
                this.name = "";
                this.integerId = 0;
                this.dataRva = 0;
                this.size = 0;
                this.codepage = 0;
                this.reserved = 0;
            }
            ResourceDataEntry.prototype.toString = function () {
                return (this.name ? this.name + " " : "") + this.integerId;
            };
            return ResourceDataEntry;
        }());
        unmanaged.ResourceDataEntry = ResourceDataEntry;
    })(unmanaged = pe.unmanaged || (pe.unmanaged = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var unmanaged;
    (function (unmanaged) {
        var ResourceDirectory = (function () {
            function ResourceDirectory() {
                this.characteristics = 0;
                this.timestamp = new Date(0);
                this.version = "";
                this.subdirectories = [];
                this.dataEntries = [];
            }
            ResourceDirectory.prototype.toString = function () {
                return "subdirectories[" + (this.subdirectories ? this.subdirectories.length : "null") + "] " +
                    "dataEntries[" + (this.dataEntries ? this.dataEntries.length : "null") + "]";
            };
            ResourceDirectory.prototype.read = function (reader) {
                var baseVirtualOffset = reader.getVirtualOffset();
                this.readCore(reader, baseVirtualOffset);
            };
            ResourceDirectory.prototype.readCore = function (reader, baseVirtualOffset) {
                this.characteristics = reader.readInt();
                if (!this.timestamp)
                    this.timestamp = new Date(0);
                this.timestamp.setTime(reader.readInt() * 1000);
                this.version = reader.readShort() + "." + reader.readShort();
                var nameEntryCount = reader.readShort();
                var idEntryCount = reader.readShort();
                var dataEntryCount = 0;
                var directoryEntryCount = 0;
                for (var i = 0; i < nameEntryCount + idEntryCount; i++) {
                    var idOrNameRva = reader.readInt();
                    var contentRva = reader.readInt();
                    var saveOffset = reader.offset;
                    var name;
                    var id;
                    var highBit = 0x80000000;
                    if (idOrNameRva < highBit) {
                        id = idOrNameRva;
                        name = null;
                    }
                    else {
                        id = 0;
                        reader.setVirtualOffset(baseVirtualOffset + idOrNameRva - highBit);
                        name = this.readName(reader);
                    }
                    if (contentRva < highBit) {
                        reader.setVirtualOffset(baseVirtualOffset + contentRva);
                        var dataEntry = this.dataEntries[dataEntryCount];
                        if (!dataEntry)
                            this.dataEntries[dataEntryCount] = dataEntry = new unmanaged.ResourceDataEntry();
                        dataEntry.name = name;
                        dataEntry.integerId = id;
                        dataEntry.dataRva = reader.readInt();
                        dataEntry.size = reader.readInt();
                        dataEntry.codepage = reader.readInt();
                        dataEntry.reserved = reader.readInt();
                        dataEntryCount++;
                    }
                    else {
                        contentRva = contentRva - highBit;
                        reader.setVirtualOffset(baseVirtualOffset + contentRva);
                        var directoryEntry = this.subdirectories[directoryEntryCount];
                        if (!directoryEntry)
                            this.subdirectories[directoryEntryCount] = directoryEntry = new unmanaged.ResourceDirectoryEntry();
                        directoryEntry.name = name;
                        directoryEntry.integerId = id;
                        directoryEntry.directory = new ResourceDirectory();
                        directoryEntry.directory.readCore(reader, baseVirtualOffset);
                        directoryEntryCount++;
                    }
                }
                this.dataEntries.length = dataEntryCount;
                this.subdirectories.length = directoryEntryCount;
            };
            ResourceDirectory.prototype.readName = function (reader) {
                var length = reader.readShort();
                var result = "";
                for (var i = 0; i < length; i++) {
                    result += String.fromCharCode(reader.readShort());
                }
                return result;
            };
            return ResourceDirectory;
        }());
        unmanaged.ResourceDirectory = ResourceDirectory;
    })(unmanaged = pe.unmanaged || (pe.unmanaged = {}));
})(pe || (pe = {}));
var pe;
(function (pe) {
    var unmanaged;
    (function (unmanaged) {
        var ResourceDirectoryEntry = (function () {
            function ResourceDirectoryEntry() {
                this.name = "";
                this.integerId = 0;
                this.directory = new unmanaged.ResourceDirectory();
            }
            ResourceDirectoryEntry.prototype.toString = function () {
                return (this.name ? this.name + " " : "") + this.integerId +
                    (this.directory ?
                        "[" +
                            (this.directory.dataEntries ? this.directory.dataEntries.length : 0) +
                            (this.directory.subdirectories ? this.directory.subdirectories.length : 0) +
                            "]" :
                        "[null]");
            };
            return ResourceDirectoryEntry;
        }());
        unmanaged.ResourceDirectoryEntry = ResourceDirectoryEntry;
    })(unmanaged = pe.unmanaged || (pe.unmanaged = {}));
})(pe || (pe = {}));
//# sourceMappingURL=pe.js.map
