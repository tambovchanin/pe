namespace tests.OptionalHeader_read_sample64Exe {

	export function read_succeeds() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);
	}

	export function read_peMagic_NT64() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.peMagic !== pe.headers.PEMagic.NT64)
			throw oph.peMagic;
	}

	export function read_linkerVersion_110() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.linkerVersion !== "11.0")
			throw oph.linkerVersion;
	}

	export function read_sizeOfCode_1024() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.sizeOfCode !== 1024)
			throw oph.sizeOfCode;
	}

	export function read_sizeOfInitializedData_1536() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.sizeOfInitializedData !== 1536)
			throw oph.sizeOfInitializedData;
	}

	export function read_sizeOfUninitializedData_0() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.sizeOfUninitializedData !== 0)
			throw oph.sizeOfUninitializedData;
	}

	export function read_addressOfEntryPoint_0() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.addressOfEntryPoint !== 0)
			throw oph.addressOfEntryPoint;
	}

	export function read_baseOfCode_0x2000() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.baseOfCode !== 0x2000)
			throw oph.baseOfCode;
	}

	export function read_baseOfData_0x4000() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.baseOfData !== 0x4000)
			throw oph.baseOfData;
	}

	export function read_imageBase_0x4000() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.baseOfData !== 0x4000)
			throw oph.baseOfData;
	}

	export function read_sectionAlignment_0x2000() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.sectionAlignment !== 0x2000)
			throw oph.sectionAlignment;
	}

	export function read_fileAlignment_0x200() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.fileAlignment !== 0x200)
			throw oph.fileAlignment;
	}

	export function read_operatingSystemVersion_40() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.operatingSystemVersion !== "4.0")
			throw oph.operatingSystemVersion;
	}

	export function read_imageVersion_00() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.imageVersion !== "0.0")
			throw oph.imageVersion;
	}

	export function read_subsystemVersion_40() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.subsystemVersion !== "4.0")
			throw oph.subsystemVersion;
	}

	export function read_win32VersionValue_0() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.win32VersionValue !== 0)
			throw oph.win32VersionValue;
	}

	export function read_sizeOfImage_24576() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.sizeOfImage !== 24576)
			throw oph.sizeOfImage;
	}

	export function read_sizeOfHeaders_512() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.sizeOfHeaders !== 512)
			throw oph.sizeOfHeaders;
	}

	export function read_checkSum_0() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.checkSum !== 0)
			throw oph.checkSum;
	}

	export function read_subsystem_WindowsCUI() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.subsystem !== pe.headers.Subsystem.WindowsCUI)
			throw oph.subsystem;
	}

	export function read_dllCharacteristics_0x8540() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.dllCharacteristics !== 0x8540)
			throw oph.dllCharacteristics;
	}

	export function read_sizeOfStackReserve_toString_400000h() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.sizeOfStackReserve + "" !== "400000h")
			throw oph.sizeOfStackReserve;
	}

	export function read_sizeOfStackCommit_toString_4000h() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.sizeOfStackCommit + "" !== "4000h")
			throw oph.sizeOfStackCommit;
	}

	export function read_sizeOfHeapReserve_toString_100000h() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.sizeOfHeapReserve + "" !== "100000h")
			throw oph.sizeOfHeapReserve;
	}

	export function read_sizeOfHeapCommit_toString_2000h() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.sizeOfHeapCommit + "" !== "2000h")
			throw oph.sizeOfHeapCommit;
	}

	export function read_loaderFlags_0() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.loaderFlags !== 0)
			throw oph.loaderFlags;
	}

	export function read_numberOfRvaAndSizes_16() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.numberOfRvaAndSizes !== 16)
			throw oph.numberOfRvaAndSizes;
	}

	export function read_dataDirectories_length_16() {
		var bi = new pe.io.BufferReader(sample64Exe.bytes); bi.offset = 0x98;
		var oph = new pe.headers.OptionalHeader();
		oph.read(bi);

		if (oph.dataDirectories.length !== 16)
			throw oph.dataDirectories.length;
	}
}