class DoctypesController < ApplicationController
  before_action :set_doctype, only: [:show, :edit, :update, :destroy]

  # GET /doctypes
  # GET /doctypes.json
  def index
    @doctypes = Doctype.all
  end

  # GET /doctypes/1
  # GET /doctypes/1.json
  def show
  end

  # GET /doctypes/new
  def new
    @doctype = Doctype.new
  end

  # GET /doctypes/1/edit
  def edit
  end

  # POST /doctypes
  # POST /doctypes.json
  def create
    @doctype = Doctype.new(doctype_params)

    respond_to do |format|
      if @doctype.save
        format.html { redirect_to @doctype, notice: 'Doctype was successfully created.' }
        format.json { render :show, status: :created, location: @doctype }
      else
        format.html { render :new }
        format.json { render json: @doctype.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /doctypes/1
  # PATCH/PUT /doctypes/1.json
  def update
    respond_to do |format|
      if @doctype.update(doctype_params)
        format.html { redirect_to @doctype, notice: 'Doctype was successfully updated.' }
        format.json { render :show, status: :ok, location: @doctype }
      else
        format.html { render :edit }
        format.json { render json: @doctype.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /doctypes/1
  # DELETE /doctypes/1.json
  def destroy
    @doctype.destroy
    respond_to do |format|
      format.html { redirect_to doctypes_url, notice: 'Doctype was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_doctype
      @doctype = Doctype.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def doctype_params
      params.require(:doctype).permit(:name)
    end
end
