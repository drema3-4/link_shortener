import os

global ignore_files_and_dirs
ignore_files_and_dirs = [ 'check_rows_len.py', 'check_rows_len.txt',
                          '.gitignore', 'README.md',
                          '.gitattributes', '.dockerignore',
                          '.git' ]

def check_rows_file(path: str) -> list[int]:
    '''Данная функция построчно проверяет строки файла на превышение длины в
    80 символов. Если длина превышает 80 символов, то порядковый номер этой
    строки заносится в список. По завершении функция возвращает список номеров
    строк, длина которых превышает 80 символов.'''
    f = open(path, 'r', encoding='utf-8')

    row_indexes = []
    num = 1

    try: 
        line = f.readline()
        while line:
            if len(line) > 80:
                row_indexes.append(str(num))

            line = f.readline()
            num += 1
    except:
        pass
    finally:
        f.close()

        return row_indexes


def check_files_and_dirs(path: str, wrong_lines: dict) -> dict:
    '''Данная функция проходится по всем файлам и папкам дирректории path и
    заносит в словарь результаты работы функции check_rows_file для каждого
    файла. По завершении функция возвращает словарь.'''
    global ignore_files_and_dirs
    
    files_and_dir = os.listdir(path)

    if files_and_dir:
        for elem in files_and_dir:
            if elem in ignore_files_and_dirs:
                continue
            else:
                if os.path.isdir(path + elem):
                    check_files_and_dirs(path + elem + '/', wrong_lines)
                else:
                    lines = check_rows_file(path + elem)

                    if lines:
                        wrong_lines[path + elem] = ' '.join(lines)

    return wrong_lines

def save_result(path: str, wrong_lines: dict) -> None:
    '''Данная функция сохраняет словарь wrong_lines в файл
    с путём path.'''
    f = open(path, 'w', encoding='utf-8')

    for elem in wrong_lines:
        f.write(elem + ' : ' + wrong_lines[elem] + '\n')

    f.close()

def print_result(wrong_lines: dict) -> None:
    '''Данная функция выводит в консоль словарь
    wrong_lines.'''

    for elem in wrong_lines:
        print(elem + ' : ' + wrong_lines[elem])

# calculate
work_dir = './'
wrong_lines = check_files_and_dirs(work_dir, dict())
print_result(wrong_lines)
#save_result(work_dir + 'check_rows_len.txt', wrong_lines)